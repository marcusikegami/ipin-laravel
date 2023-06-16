<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApplicationFormRequest;
use App\Mail\ApplicationEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function sendApplicationEmail(ApplicationFormRequest $request)
    {
        $data = $request->validated();

        // $data['orgname'] = $request->orgname;
        // $data['providername'] = $request->providername;
        // $data['contact'] = $request->contact;
        // $data['address'] = $request->address;
        // $data['email'] = $request->email;
        // $data['phone'] = $request->phone;
        // $data['fax'] = $request->fax;
        // $data['license'] = $request->license;
        // $data['url'] = $request->url;
        // $sponsorshp = $request->sponsorshp;
        // create variable $date which is the current date and time in the MST timezone
        $timezone = new \DateTimeZone('America/Denver');
        $rawdate = new \DateTime('now', $timezone);
        $date = $rawdate->format('m/d/Y h:i:s a');

        $to_name = env('MAIL_TO_NAME');
        $to_email = env('MAIL_TO_ADDRESS');

        $data['date'] = $date;

        logger()->info('applicationemail.php', $data);

        try {
            Mail::to($to_email, $to_name)->send(new ApplicationEmail($data));
        } catch (\Exception $e) {
            logger()->error($e->getMessage());
            return response()->json([
                'status' => 'error',
                'message' => 'Email not sent: ' . $e->getMessage()
            ], 500);
        }
    }
}
