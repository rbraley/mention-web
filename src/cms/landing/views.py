from django.views.generic.simple import direct_to_template
from cms.landing.models import Headline

def headline(request):
    """ Shows a headline related to a news article. """

    try:
        headline = Headline.objects.all().order_by('?')[0]
    except IndexError:
        headline = None

    kwargs = {
        'template': 'landing.html',
        'extra_context': {
            'headline': headline,
        },
    }

    return direct_to_template(request, **kwargs)

