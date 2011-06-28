from django.db import models
from news.models import Article

class Headline(models.Model):
    title = models.CharField(max_length=32)
    article = models.ForeignKey(Article)
    style = models.CharField(max_length=16, null=True, blank=True)

    def __unicode__(self):
        return self.title

