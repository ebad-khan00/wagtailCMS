from django.db import models

from wagtail import blocks
from wagtail.admin.panels import (
    FieldPanel,
    InlinePanel,
    MultiFieldPanel,
)
from wagtail.fields import RichTextField, StreamField
from wagtail.images.blocks import ImageChooserBlock
from wagtail.search import index
from wagtail.images import get_image_model_string

from myproject.utils.blocks import StoryBlock
from myproject.utils.models import BasePage


# =========================================================
# STANDARD PAGE
# =========================================================

class StandardPage(BasePage):

    template = "pages/standard_page.html"

    introduction = models.TextField(
        blank=True
    )

    display_table_of_contents = models.BooleanField(
        default=True
    )

    body = StreamField(
        StoryBlock(),
        blank=True,
        use_json_field=True,
    )

    featured_section_title = models.TextField(
        blank=True
    )

    search_fields = BasePage.search_fields + [
        index.SearchField("introduction")
    ]

    content_panels = BasePage.content_panels + [
        FieldPanel("introduction"),

        FieldPanel("display_table_of_contents"),

        FieldPanel("body"),

        MultiFieldPanel(
            [
                FieldPanel(
                    "featured_section_title",
                    heading="Title",
                ),

                InlinePanel(
                    "page_related_pages",
                    label="Pages",
                    max_num=3,
                ),
            ],
            heading="Featured section",
        ),
    ]


# =========================================================
# INDEX PAGE
# =========================================================

class IndexPage(BasePage):

    template = "pages/index_page.html"

    introduction = RichTextField(
        blank=True
    )

    body = StreamField(
        StoryBlock(),
        blank=True,
        use_json_field=True,
    )

    search_fields = BasePage.search_fields + [
        index.SearchField("introduction")
    ]

    content_panels = BasePage.content_panels + [
        FieldPanel("introduction"),

        InlinePanel(
            "page_related_pages",
            label="Featured pages",
            min_num=3,
            max_num=12,
        ),

        FieldPanel("body"),
    ]


# =========================================================
# ABOUT PAGE BLOCKS
# =========================================================

class FeatureBlock(blocks.StructBlock):
    """
    Reusable feature component.
    """

    icon = blocks.CharBlock(
        required=False,
        help_text="Example: icon-home2",
    )

    title = blocks.CharBlock(
        max_length=100,
    )

    description = blocks.TextBlock(
        required=False,
    )

    class Meta:
        icon = "placeholder"
        label = "Feature"


class GalleryImageBlock(blocks.StructBlock):
    """
    Reusable gallery image component.
    """

    image = ImageChooserBlock(
        required=True,
    )

    alt_text = blocks.CharBlock(
        required=False,
        help_text="Alternative text for accessibility.",
    )

    class Meta:
        icon = "image"
        label = "Gallery Image"


class StatisticBlock(blocks.StructBlock):
    """
    Reusable statistic/counter component.
    """

    number = blocks.IntegerBlock()

    label = blocks.CharBlock(
        max_length=100,
    )

    class Meta:
        icon = "counter"
        label = "Statistic"


class TeamMemberBlock(blocks.StructBlock):
    """
    Reusable team member component.
    """

    image = ImageChooserBlock(
        required=True,
    )

    name = blocks.CharBlock(
        max_length=100,
    )

    position = blocks.CharBlock(
        max_length=150,
        required=False,
    )

    description = blocks.TextBlock(
        required=False,
    )

    twitter_url = blocks.URLBlock(
        required=False,
    )

    facebook_url = blocks.URLBlock(
        required=False,
    )

    linkedin_url = blocks.URLBlock(
        required=False,
    )

    instagram_url = blocks.URLBlock(
        required=False,
    )

    class Meta:
        icon = "user"
        label = "Team Member"


# =========================================================
# ABOUT PAGE
# =========================================================

class AboutPage(BasePage):

    template = "pages/about_page.html"

    # =====================================================
    # HERO
    # =====================================================

    hero_title = models.CharField(
        max_length=255,
        default="About",
    )

    hero_image = models.ForeignKey(
        get_image_model_string(),
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    # =====================================================
    # ABOUT CONTENT
    # =====================================================

    about_title = models.CharField(
        max_length=255,
        default="About Us",
    )

    about_content_left = RichTextField(
        blank=True,
    )

    about_content_right = RichTextField(
        blank=True,
    )

    # =====================================================
    # FIRST FEATURE SECTION
    # =====================================================

    first_feature_image = models.ForeignKey(
        get_image_model_string(),
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    first_features = StreamField(
        [
            (
                "feature",
                FeatureBlock(),
            ),
        ],
        blank=True,
        use_json_field=True,
    )

    # =====================================================
    # SECOND FEATURE SECTION
    # =====================================================

    second_feature_image = models.ForeignKey(
        get_image_model_string(),
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    second_features = StreamField(
        [
            (
                "feature",
                FeatureBlock(),
            ),
        ],
        blank=True,
        use_json_field=True,
    )

    # =====================================================
    # IMAGE GALLERY
    # =====================================================

    gallery_images = StreamField(
        [
            (
                "image",
                GalleryImageBlock(),
            ),
        ],
        blank=True,
        use_json_field=True,
    )

    # =====================================================
    # STATISTICS
    # =====================================================

    statistics = StreamField(
        [
            (
                "statistic",
                StatisticBlock(),
            ),
        ],
        blank=True,
        use_json_field=True,
    )

    # =====================================================
    # TEAM
    # =====================================================

    team_title = models.CharField(
        max_length=255,
        default="The Team",
    )

    team_members = StreamField(
        [
            (
                "member",
                TeamMemberBlock(),
            ),
        ],
        blank=True,
        use_json_field=True,
    )

    # =====================================================
    # SEARCH
    # =====================================================

    search_fields = BasePage.search_fields + [
        index.SearchField("hero_title"),
        index.SearchField("about_title"),
        index.SearchField("about_content_left"),
        index.SearchField("about_content_right"),
    ]

    # =====================================================
    # WAGTAIL ADMIN PANELS
    # =====================================================

    content_panels = BasePage.content_panels + [

        # -------------------------------------------------
        # HERO
        # -------------------------------------------------

        MultiFieldPanel(
            [
                FieldPanel("hero_title"),
                FieldPanel("hero_image"),
            ],
            heading="Hero Section",
        ),

        # -------------------------------------------------
        # ABOUT CONTENT
        # -------------------------------------------------

        MultiFieldPanel(
            [
                FieldPanel("about_title"),
                FieldPanel("about_content_left"),
                FieldPanel("about_content_right"),
            ],
            heading="About Content",
        ),

        # -------------------------------------------------
        # FIRST FEATURE SECTION
        # -------------------------------------------------

        MultiFieldPanel(
            [
                FieldPanel("first_feature_image"),
                FieldPanel("first_features"),
            ],
            heading="First Feature Section",
        ),

        # -------------------------------------------------
        # SECOND FEATURE SECTION
        # -------------------------------------------------

        MultiFieldPanel(
            [
                FieldPanel("second_feature_image"),
                FieldPanel("second_features"),
            ],
            heading="Second Feature Section",
        ),

        # -------------------------------------------------
        # IMAGE GALLERY
        # -------------------------------------------------

        FieldPanel("gallery_images"),

        # -------------------------------------------------
        # STATISTICS
        # -------------------------------------------------

        FieldPanel("statistics"),

        # -------------------------------------------------
        # TEAM
        # -------------------------------------------------

        MultiFieldPanel(
            [
                FieldPanel("team_title"),
                FieldPanel("team_members"),
            ],
            heading="Team Section",
        ),
    ]