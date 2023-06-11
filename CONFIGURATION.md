# Configure google account for sending emails

Navigate to the chosen google account settings and go to the security tab.
Make sure you have 2-factor authentication enabled on your google account. Then create an app password for the application (If you are having trouble finding it search 'app password' in the settings searchbar). This will be the password you use in the .env file. Copy the password output and enter it in the .env file at line MAIL_PASSWORD.

# SMTP Configuration

update the .env file with the following information:

```
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_USERNAME="{email username}"
MAIL_PASSWORD="{email password}"
MAIL_ENCRYPTION=tsl
MAIL_FROM_ADDRESS="{mail from address}"
MAIL_FROM_NAME="{mail from name}"
```
