from django.db import models

from modelcluster.fields import ParentalKey
from modelcluster.models import ClusterableModel

from wagtail.admin.panels import (
    FieldPanel,
    InlinePanel,
)
from wagtail.images import get_image_model_string
from wagtail.models import Orderable
from wagtail.snippets.models import register_snippet


@register_snippet
class AgentsSection(ClusterableModel):
    """
    Reusable Agents section.

    This section can be managed once in Wagtail
    and displayed on multiple pages.
    """

    title = models.CharField(
        max_length=200,
        default="Our Agents",
    )

    description = models.TextField(
        blank=True,
    )

    panels = [
        FieldPanel("title"),
        FieldPanel("description"),

        InlinePanel(
            "agents",
            label="Agents",
            heading="Agents",
            min_num=1,
        ),
    ]

    def __str__(self):
        return self.title


class Agent(Orderable):
    """
    Individual agent/team member.
    """

    section = ParentalKey(
        AgentsSection,
        on_delete=models.CASCADE,
        related_name="agents",
    )

    image = models.ForeignKey(
        get_image_model_string(),
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    name = models.CharField(
        max_length=100,
    )

    designation = models.CharField(
        max_length=150,
        blank=True,
    )

    description = models.TextField(
        blank=True,
    )

    twitter = models.URLField(
        blank=True,
    )

    facebook = models.URLField(
        blank=True,
    )

    linkedin = models.URLField(
        blank=True,
    )

    instagram = models.URLField(
        blank=True,
    )

    panels = [
        FieldPanel("image"),
        FieldPanel("name"),
        FieldPanel("designation"),
        FieldPanel("description"),
        FieldPanel("twitter"),
        FieldPanel("facebook"),
        FieldPanel("linkedin"),
        FieldPanel("instagram"),
    ]

    def __str__(self):
        return self.name