from rest_framework import serializers

class EmailSerializer(serializers.Serializer):
    email = serializers.EmailField()
    name = serializers.CharField(max_length=100)
    subject = serializers.CharField(max_length=200)
    message = serializers.CharField()