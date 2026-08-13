from wagtail import blocks
from wagtail.images.blocks import ImageChooserBlock


class AgentBlock(blocks.StructBlock):
    """
    A single agent/team member.
    """

    image = ImageChooserBlock(
        required=False,
        label="Agent Image",
    )

    name = blocks.CharBlock(
        required=True,
        max_length=100,
        label="Name",
    )

    designation = blocks.CharBlock(
        required=False,
        max_length=150,
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


class AgentsBlock(blocks.StructBlock):
    """
    Reusable Agents section.
    """

    title = blocks.CharBlock(
        required=True,
        max_length=200,
        label="Section Title",
    )

    description = blocks.TextBlock(
        required=False,
        label="Section Description",
    )

    agents = blocks.ListBlock(
        AgentBlock(),
        min_num=1,
        label="Agents",
    )

    class Meta:
        icon = "group"
        label = "Agents"
        template = "components/streamfield/blocks/agents.html"