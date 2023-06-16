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

    /**
     * The data to be used in the message.
     */
    public array $data;
    /**
     * Create a new message instance.
     */
    public function __construct(array $data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     */
    public function build(): self
    {
        return $this->to(env('MAIL_TO_ADDRESS'), env('MAIL_TO_NAME'))
            ->cc(env('MAIL_CC_ADDRESS'), env('MAIL_CC_NAME'))
            ->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))
            ->subject('New Application from ' . $this->data['orgname'])
            ->view('application-email')
            ->attachData($this->getPdfContent(), $this->getAttachmentFileName());
    }

    /**
     * Get the PDF content.
     */
    private function getPdfContent(): string
    {
        // Create a new instance of Dompdf
        $dompdf = new Dompdf();

        // Load the HTML content into Dompdf
        $dompdf->loadHtml(view('application')->with('data', $this->data));

        // (Optional) Set any configuration options for Dompdf
        $dompdf->setPaper('A4', 'portrait');

        // Render the PDF
        $dompdf->render();

        // Get the PDF content
        return $dompdf->output();
    }

    /**
     * Get the attachment file name.
     */
    private function getAttachmentFileName(): string
    {
        return $this->data['orgname'] . '-application.pdf';
    }
}
