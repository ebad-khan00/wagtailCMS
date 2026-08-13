from django.db import models

from modelcluster.fields import ParentalKey

from wagtail.admin.panels import (
    FieldPanel,
    FieldRowPanel,
    InlinePanel,
    MultiFieldPanel,
)

from wagtail.contrib.forms.models import (
    AbstractEmailForm,
    AbstractFormField,
)

from wagtail.contrib.forms.panels import FormSubmissionsPanel

from wagtail.fields import RichTextField


class ContactFormField(AbstractFormField):
    page = ParentalKey(
        "ContactPage",
        on_delete=models.CASCADE,
        related_name="form_fields",
    )


class ContactPage(AbstractEmailForm):

    template = "contact/contact_page.html"

    # ---------------------------------------------------------
    # Contact page content
    # ---------------------------------------------------------

    intro = RichTextField(
        blank=True,
        help_text="Introduction text displayed above the contact form.",
    )

    address = models.CharField(
        max_length=255,
        blank=True,
    )

    opening_hours = models.CharField(
        max_length=255,
        blank=True,
    )

    contact_email = models.EmailField(
        blank=True,
    )

    phone = models.CharField(
        max_length=100,
        blank=True,
    )

    thank_you_text = RichTextField(
        blank=True,
    )

    # ---------------------------------------------------------
    # Add Bootstrap class to generated form fields
    # ---------------------------------------------------------

    def get_form_class(self):
        form_class = super().get_form_class()

        for field in form_class.base_fields.values():
            field.widget.attrs["class"] = "form-control"

        return form_class

    # ---------------------------------------------------------
    # Wagtail Admin panels
    # ---------------------------------------------------------

    content_panels = AbstractEmailForm.content_panels + [

        # Contact information
        MultiFieldPanel(
            [
                FieldPanel("address"),
                FieldPanel("opening_hours"),
                FieldPanel("contact_email"),
                FieldPanel("phone"),
            ],
            heading="Contact Information",
        ),

        # Intro
        FieldPanel("intro"),

        # Dynamic form fields
        InlinePanel(
            "form_fields",
            label="Form field",
        ),

        # Thank-you message
        FieldPanel("thank_you_text"),

        # Submitted form data
        FormSubmissionsPanel(),

        # Email configuration
        MultiFieldPanel(
            [
                FieldRowPanel(
                    [
                        FieldPanel(
                            "from_address",
                            classname="col6",
                        ),
                        FieldPanel(
                            "to_address",
                            classname="col6",
                        ),
                    ]
                ),
                FieldPanel("subject"),
            ],
            heading="Email",
        ),
    ]