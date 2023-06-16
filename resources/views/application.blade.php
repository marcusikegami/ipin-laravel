<html>

<head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
    <style type="text/css">
        body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
            color: #000000;
            margin: 4rem 4rem;
        }

        .header {
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            padding-bottom: 4rem;
        }
    </style>
</head>

<body class="">
    <div class="header">
        <img src="https://ipin-np.org/public_html/logo.png" alt="IPIN Logo" />
        <h3>IPIN Sponsorship Application</h3>
    </div>
    <p>
        Organization Name:
        <span>{{ $data['orgname'] }}</span>
    </p>
    <p>
        Provider/Attorney Name:
        <span>{{ $data['providername'] }}</span>
    </p>
    <p>
        Contact Person:
        <span>{{ $data['contact'] }}</span>
    </p>
    <p>
        Address:
        <span>{{ $data['address'] }}</span>
    </p>
    <p>
        Email:
        <span>{{ $data['email'] }}</span>
    </p>
    <p>
        Phone:
        <span>{{ $data['phone'] }}</span>
    </p>
    <p>
        Fax:
        <span>{{ $data['fax'] }}</span>
    </p>
    <p>
        License #:
        <span>{{ $data['license'] }}</span>
    </p>
    <p>
        Website URL:
        <span>{{ $data['url'] }}</span>
    </p>
    </br>
    <p>
        Sponsorship Level:
        <span>{{ $data['sponsorship'] }}</span>
    </p>
    </br>
    </br>
    <p>
        Submission Date:
        <span>{{ $data['date'] }}</span>
    </p>
</body>

</html>