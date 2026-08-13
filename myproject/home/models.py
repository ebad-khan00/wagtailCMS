from django.db import models

from wagtail import blocks
from wagtail.admin.panels import FieldPanel, InlinePanel, MultiFieldPanel
from wagtail.fields import StreamField
from wagtail.images import get_image_model_string
from wagtail.images.blocks import ImageChooserBlock
from wagtail.search import index

from myproject.utils.blocks import StoryBlock, InternalLinkBlock
from myproject.utils.models import BasePage


# ============================================================
# PROPERTY BLOCK
# ============================================================

class PropertyBlock(blocks.StructBlock):

    image = ImageChooserBlock(
        required=False,
        label="Property Image",
    )

    price = blocks.CharBlock(
        max_length=100,
        required=False,
        label="Price",
    )

    address = blocks.CharBlock(
        max_length=255,
        required=False,
        label="Address",
    )

    city = blocks.CharBlock(
        max_length=255,
        required=False,
        label="City",
    )

    beds = blocks.CharBlock(
        max_length=50,
        default="2 beds",
        required=False,
        label="Beds",
    )

    baths = blocks.CharBlock(
        max_length=50,
        default="2 baths",
        required=False,
        label="Baths",
    )

    link = blocks.URLBlock(
        required=False,
        label="Property URL",
    )

    class Meta:
        icon = "home"
        label = "Property"


# ============================================================
# FEATURE BLOCK
# ============================================================

class FeatureBlock(blocks.StructBlock):

    icon = blocks.CharBlock(
        max_length=100,
        required=False,
        label="Icon Class",
        help_text="Example: flaticon-house",
    )

    title = blocks.CharBlock(
        max_length=255,
        required=False,
        label="Title",
    )

    description = blocks.TextBlock(
        required=False,
        label="Description",
    )

    link_text = blocks.CharBlock(
        max_length=100,
        default="Learn More",
        required=False,
        label="Link Text",
    )

    link = blocks.URLBlock(
        required=False,
        label="Link",
    )

    class Meta:
        icon = "placeholder"
        label = "Feature"


# ============================================================
# TESTIMONIAL BLOCK
# ============================================================

class TestimonialBlock(blocks.StructBlock):

    image = ImageChooserBlock(
        required=False,
        label="Person Image",
    )

    name = blocks.CharBlock(
        max_length=255,
        required=False,
        label="Name",
    )

    designation = blocks.CharBlock(
        max_length=255,
        required=False,
        label="Designation",
    )

    content = blocks.TextBlock(
        required=False,
        label="Testimonial",
    )

    rating = blocks.IntegerBlock(
        default=5,
        min_value=1,
        max_value=5,
        required=False,
        label="Rating",
    )

    class Meta:
        icon = "user"
        label = "Testimonial"


# ============================================================
# FIND HOME FEATURE BLOCK
# ============================================================

class HomeFeatureBlock(blocks.StructBlock):

    icon = blocks.CharBlock(
        max_length=100,
        required=False,
        label="Icon Class",
        help_text="Example: icon-home2",
    )

    title = blocks.CharBlock(
        max_length=255,
        required=False,
        label="Title",
    )

    description = blocks.TextBlock(
        required=False,
        label="Description",
    )

    class Meta:
        icon = "placeholder"
        label = "Home Feature"


# ============================================================
# COUNTER BLOCK
# ============================================================

class CounterBlock(blocks.StructBlock):

    number = blocks.IntegerBlock(
        required=False,
        label="Number",
    )

    label = blocks.CharBlock(
        max_length=255,
        required=False,
        label="Label",
    )

    class Meta:
        icon = "plus"
        label = "Counter"


# ============================================================
# AGENT BLOCK
# ============================================================

class AgentBlock(blocks.StructBlock):

    image = ImageChooserBlock(
        required=False,
        label="Agent Image",
    )

    name = blocks.CharBlock(
        max_length=255,
        required=False,
        label="Name",
    )

    designation = blocks.CharBlock(
        max_length=255,
        default="Real Estate Agent",
        required=False,
        label="Designation",
    )

    description = blocks.TextBlock(
        required=False,
        label="Description",
    )

    twitter = blocks.URLBlock(
        required=False,
        label="Twitter URL",
    )

    facebook = blocks.URLBlock(
        required=False,
        label="Facebook URL",
    )

    linkedin = blocks.URLBlock(
        required=False,
        label="LinkedIn URL",
    )

    instagram = blocks.URLBlock(
        required=False,
        label="Instagram URL",
    )

    class Meta:
        icon = "user"
        label = "Agent"


# ============================================================
# HOME PAGE
# ============================================================

class HomePage(BasePage):

    template = "pages/home_page.html"

    # ========================================================
    # BASIC / INTRODUCTION
    # ========================================================

    introduction = models.TextField(
        blank=True,
        verbose_name="Introduction",
    )

    # ========================================================
    # HERO SECTION
    # ========================================================

    hero_title = models.CharField(
        max_length=255,
        default="Easiest way to find your dream home",
        blank=True,
        verbose_name="Hero Title",
    )

    hero_background = models.ForeignKey(
        get_image_model_string(),
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
        verbose_name="Hero Background",
    )

    search_placeholder = models.CharField(
        max_length=255,
        default="Your ZIP code or City. e.g. New York",
        blank=True,
        verbose_name="Search Placeholder",
    )

    search_button_text = models.CharField(
        max_length=100,
        default="Search",
        blank=True,
        verbose_name="Search Button Text",
    )

    hero_cta = StreamField(
        [
            ("link", InternalLinkBlock()),
        ],
        blank=True,
        min_num=0,
        max_num=1,
        use_json_field=True,
        verbose_name="Hero CTA",
    )

    # ========================================================
    # POPULAR PROPERTIES
    # ========================================================

    properties_title = models.CharField(
        max_length=255,
        default="Popular Properties",
        blank=True,
        verbose_name="Properties Title",
    )

    properties_button_text = models.CharField(
        max_length=100,
        default="View all properties",
        blank=True,
        verbose_name="Properties Button Text",
    )

    properties_button_url = models.URLField(
        blank=True,
        verbose_name="Properties Button URL",
    )

    properties = StreamField(
        [
            ("property", PropertyBlock()),
        ],
        blank=True,
        use_json_field=True,
        verbose_name="Properties",
    )

    # ========================================================
    # FEATURES
    # ========================================================

    features = StreamField(
        [
            ("feature", FeatureBlock()),
        ],
        blank=True,
        use_json_field=True,
        verbose_name="Features",
    )

    # ========================================================
    # TESTIMONIALS
    # ========================================================

    testimonials_title = models.CharField(
        max_length=255,
        default="Customer Says",
        blank=True,
        verbose_name="Testimonials Title",
    )

    testimonials = StreamField(
        [
            ("testimonial", TestimonialBlock()),
        ],
        blank=True,
        use_json_field=True,
        verbose_name="Testimonials",
    )

    # ========================================================
    # FIND YOUR HOME SECTION
    # ========================================================

    find_home_title = models.CharField(
        max_length=255,
        default="Let's find home that's perfect for you",
        blank=True,
        verbose_name="Find Home Title",
    )

    find_home_description = models.TextField(
        blank=True,
        verbose_name="Find Home Description",
    )

    find_home_image = models.ForeignKey(
        get_image_model_string(),
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
        verbose_name="Find Home Image",
    )

    home_features = StreamField(
        [
            ("feature", HomeFeatureBlock()),
        ],
        blank=True,
        use_json_field=True,
        verbose_name="Home Features",
    )

    # ========================================================
    # COUNTERS
    # ========================================================

    counters = StreamField(
        [
            ("counter", CounterBlock()),
        ],
        blank=True,
        use_json_field=True,
        verbose_name="Counters",
    )

    # ========================================================
    # CTA SECTION
    # ========================================================

    cta_title = models.CharField(
        max_length=255,
        default="Be a part of our growing real state agents",
        blank=True,
        verbose_name="CTA Title",
    )

    cta_button_text = models.CharField(
        max_length=100,
        default="Apply for Real Estate agent",
        blank=True,
        verbose_name="CTA Button Text",
    )

    cta_button_url = models.URLField(
        blank=True,
        verbose_name="CTA Button URL",
    )

    # ========================================================
    # AGENTS
    # ========================================================

    agents_title = models.CharField(
        max_length=255,
        default="Our Agents",
        blank=True,
        verbose_name="Agents Title",
    )

    agents_description = models.TextField(
        blank=True,
        verbose_name="Agents Description",
    )

    agents = StreamField(
        [
            ("agent", AgentBlock()),
        ],
        blank=True,
        use_json_field=True,
        verbose_name="Agents",
    )

    # ========================================================
    # EXISTING BODY
    # ========================================================

    body = StreamField(
        StoryBlock(),
        blank=True,
        use_json_field=True,
    )

    # ========================================================
    # EXISTING FEATURED SECTION
    # ========================================================

    featured_section_title = models.TextField(
        blank=True,
        verbose_name="Featured Section Title",
    )

    # ========================================================
    # SEARCH
    # ========================================================

    search_fields = BasePage.search_fields + [
        index.SearchField("introduction"),
        index.SearchField("hero_title"),
        index.SearchField("properties_title"),
        index.SearchField("testimonials_title"),
        index.SearchField("find_home_title"),
        index.SearchField("cta_title"),
        index.SearchField("agents_title"),
    ]

    # ========================================================
    # ADMIN CONTENT PANELS
    # ========================================================

    content_panels = BasePage.content_panels + [

        # ----------------------------------------------------
        # HERO
        # ----------------------------------------------------

        MultiFieldPanel(
            [
                FieldPanel("hero_title"),
                FieldPanel("hero_background"),
                FieldPanel("search_placeholder"),
                FieldPanel("search_button_text"),
                FieldPanel("hero_cta"),
            ],
            heading="Hero Section",
        ),

        # ----------------------------------------------------
        # PROPERTIES
        # ----------------------------------------------------

        MultiFieldPanel(
            [
                FieldPanel("properties_title"),
                FieldPanel("properties_button_text"),
                FieldPanel("properties_button_url"),
                FieldPanel("properties"),
            ],
            heading="Popular Properties",
        ),

        # ----------------------------------------------------
        # FEATURES
        # ----------------------------------------------------

        MultiFieldPanel(
            [
                FieldPanel("features"),
            ],
            heading="Features",
        ),

        # ----------------------------------------------------
        # TESTIMONIALS
        # ----------------------------------------------------

        MultiFieldPanel(
            [
                FieldPanel("testimonials_title"),
                FieldPanel("testimonials"),
            ],
            heading="Testimonials",
        ),

        # ----------------------------------------------------
        # FIND YOUR HOME
        # ----------------------------------------------------

        MultiFieldPanel(
            [
                FieldPanel("find_home_title"),
                FieldPanel("find_home_description"),
                FieldPanel("find_home_image"),
                FieldPanel("home_features"),
            ],
            heading="Find Your Home Section",
        ),

        # ----------------------------------------------------
        # COUNTERS
        # ----------------------------------------------------

        MultiFieldPanel(
            [
                FieldPanel("counters"),
            ],
            heading="Counters",
        ),

        # ----------------------------------------------------
        # CTA
        # ----------------------------------------------------

        MultiFieldPanel(
            [
                FieldPanel("cta_title"),
                FieldPanel("cta_button_text"),
                FieldPanel("cta_button_url"),
            ],
            heading="Call To Action",
        ),

        # ----------------------------------------------------
        # AGENTS
        # ----------------------------------------------------

        MultiFieldPanel(
            [
                FieldPanel("agents_title"),
                FieldPanel("agents_description"),
                FieldPanel("agents"),
            ],
            heading="Agents",
        ),

        # ----------------------------------------------------
        # PAGE CONTENT
        # ----------------------------------------------------

        MultiFieldPanel(
            [
                FieldPanel("introduction"),
                FieldPanel("body"),
            ],
            heading="Page Content",
        ),

        # ----------------------------------------------------
        # FEATURED SECTION
        # ----------------------------------------------------

        MultiFieldPanel(
            [
                FieldPanel(
                    "featured_section_title",
                    heading="Title",
                ),
                InlinePanel(
                    "page_related_pages",
                    label="Pages",
                    max_num=12,
                ),
            ],
            heading="Featured Section",
        ),
    ]