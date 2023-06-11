import { useEffect, useState } from "react";
import axiosClient from "../axios-client";

const ApplicationForm = () => {
    const [formState, setFormState] = useState({
        orgname: "",
        address: "",
        providername: "",
        contact: "",
        email: "",
        phone: "",
        fax: "",
        license: "",
        url: "",
        sponsorship: "",
    });

    const handleChange = (ev) => {
        setFormState({
            ...formState,
            [ev.target.name]: ev.target.value,
        });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        axiosClient
            .post("/submit/sponsorship", formState)
            .then((res) => {
                console.log(res);
                alert("Your information has been submitted.");
            })
            .catch((err) => {
                console.log(err);
                alert("There was an error submitting your application.");
            });
    };

    return (
        <form
            id="application-form"
            className="flex flex-col font-abel"
            onSubmit={handleSubmit}
        >
            <input
                name="orgname"
                type="text"
                placeholder="Organization Name"
                className="my-4 px-2 py-1 border"
                onChange={(ev) => handleChange(ev)}
            />
            <input
                name="address"
                type="text"
                placeholder="Organization Address"
                className="my-4 px-2 py-1 border"
                onChange={(ev) => handleChange(ev)}
            />
            <input
                name="providername"
                type="text"
                placeholder="Provider Name"
                className="my-4 px-2 py-1 border"
                onChange={(ev) => handleChange(ev)}
            />
            <input
                name="contact"
                type="text"
                placeholder="Contact Person"
                className="my-4 px-2 py-1 border"
                onChange={(ev) => handleChange(ev)}
            />
            <input
                name="email"
                type="text"
                placeholder="Contact Email"
                className="my-4 px-2 py-1 border"
                onChange={(ev) => handleChange(ev)}
            />
            <input
                name="phone"
                type="text"
                placeholder="Contact Phone Number"
                className="my-4 px-2 py-1 border"
                onChange={(ev) => handleChange(ev)}
            />
            <input
                name="fax"
                type="text"
                placeholder="Contact Fax Number"
                className="my-4 px-2 py-1 border"
                onChange={(ev) => handleChange(ev)}
            />
            <input
                name="license"
                type="text"
                placeholder="License Number (if applicable)"
                className="my-4 px-2 py-1 border"
                onChange={(ev) => handleChange(ev)}
            />
            <input
                name="url"
                type="text"
                placeholder="Website URL"
                className="my-4 px-2 py-1 border"
                onChange={(ev) => handleChange(ev)}
            />
            <select
                className="my-4 px-2 py-1 border"
                name="sponsorship"
                onChange={(ev) => handleChange(ev)}
            >
                <option value="">Select a Sponsorship Tier</option>
                <option value="Platinum">Platinum: $25,000 yearly</option>
                <option value="Gold">Gold: $10,000 yearly</option>
                <option value="Silver">Silver: $5,000 yearly</option>
                <option value="Bronze">Bronze: $2,500 yearly</option>
            </select>
            <button className="my-4 px-2 py-1 bg-red-600 text-white hover:bg-red-500 hover:underline transition-all w-1/2 mx-auto">
                Submit
            </button>
        </form>
    );
};

export default ApplicationForm;
