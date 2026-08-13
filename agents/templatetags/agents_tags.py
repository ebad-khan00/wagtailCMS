from django import template

from agents.models import AgentsSection


register = template.Library()


@register.simple_tag
def get_agents():
    return (
        AgentsSection.objects
        .prefetch_related("agents__image")
        .first()
    )