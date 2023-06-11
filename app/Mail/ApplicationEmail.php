<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Dompdf\Dompdf;
use Illuminate\Support\Facades\View;
use Illuminate\Mail\Mailables\Attachment;

class ApplicationEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;
    /**
     * Create a new message instance.
     */
    public function __construct(array $data)
    {
        $this->data = $data;
        logger()->info(json_encode($data));
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Application from ' . $this->data['orgname'],
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'application-email',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        // Render the view and get the HTML content
        $html = View::make('application', $this->data)->render();

        // Create a new instance of Dompdf
        $dompdf = new Dompdf();

        // Load the HTML content into Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Set any configuration options for Dompdf
        $dompdf->setPaper('A4', 'portrait');
        // Render the PDF
        $dompdf->render();

        // Get the PDF content
        $pdfContent = $dompdf->output();
        $fileName = $this->data['orgname'] . '-application.pdf';

        // Create an attachment with the PDF content
        $attachment = Attachment::fromData(static function () use ($pdfContent) {
            echo $pdfContent;
        }, $fileName);

        return [$attachment];
    }
}
