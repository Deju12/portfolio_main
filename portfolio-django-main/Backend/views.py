from django.core.mail import send_mail
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import EmailSerializer
class SendEmailView(APIView):
    
    def get(self, request):
        return Response('<div> fjhsdgfjhsdfjshkdj </div>')
    def post(self, request):
        serializer = EmailSerializer(data=request.data)
        if serializer.is_valid():
            email_data = serializer.validated_data
            send_mail(
                email_data['subject'],
                f"Name: {email_data['name']}\nEmail: {email_data['email']}\nMessage: {email_data['message']}",
                'mailtrap@demomailtrap.com',
                ['dejotesfa123@gmail.com'],  # Replace with recipient's email address
                fail_silently=False,
            )
            return Response({'message': 'Email sent successfully!'})
        return Response(serializer.errors, status=400)