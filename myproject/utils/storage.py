import logging

from django.contrib.staticfiles.storage import ManifestStaticFilesStorage

logger = logging.getLogger(__name__)


class NonStrictManifestStaticFilesStorage(ManifestStaticFilesStorage):
    """
    Some vendor CSS (migrated from the original HTML template) references
    image/font files that were never copied into this repo. Rather than
    letting collectstatic hard-fail on every such broken reference, log a
    warning and leave it unhashed so the rest of the build still completes.
    """

    def hashed_name(self, name, content=None, filename=None):
        try:
            return super().hashed_name(name, content, filename)
        except ValueError:
            logger.warning(
                "Could not find file for hashing (leaving unhashed): %s",
                filename or name,
            )
            return name