import logging

from django.contrib.staticfiles.storage import ManifestStaticFilesStorage

logger = logging.getLogger(__name__)


class NonStrictManifestStaticFilesStorage(ManifestStaticFilesStorage):
    """
    Some vendor CSS (migrated from the original HTML template) references
    image/font files that were never copied into this repo, and some
    templates reference static files that aren't collected at all (e.g.
    fonts/flaticon/font/flaticon.css). Rather than letting collectstatic or
    {% static %} hard-fail on every such broken reference, log a warning and
    leave it unhashed so the rest of the build/request still completes.
    """

    # Used by {% static %} lookups (stored_name): fall back to hashed_name()
    # instead of raising when a requested file was never collected.
    manifest_strict = False

    def hashed_name(self, name, content=None, filename=None):
        try:
            return super().hashed_name(name, content, filename)
        except ValueError:
            logger.warning(
                "Could not find file for hashing (leaving unhashed): %s",
                filename or name,
            )
            return name