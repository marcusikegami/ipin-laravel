import { useState } from "react";
import axiosClient from "../axios-client";

const ApplicationForm = () => {
    const [loading, setLoading] = useState(false);
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
        setLoading(true);
        let form = {};
        let prevFormState = formState;
        // loop through the keys in formState and add "N/A" if the value is empty
        for (let key in formState) {
            if (formState[key] === "") {
                form[key] = "N/A";
            } else {
                form[key] = formState[key];
            }
        }
        axiosClient
            .post("/submit/sponsorship", form)
            .then((res) => {
                setLoading(false);
                console.log(res);
                alert("Your information has been submitted.");
                setFormState({});
            })
            .catch((err) => {
                setLoading(false);
                console.error(err);
                alert(
                    `There was an error submitting your application. ${err.response.data.message}`
                );
                setFormState(prevFormState);
            });
    };

    return (
        <form
            id="application-form"
            className="flex flex-col font-abel"
            onSubmit={handleSubmit}
        >
            {loading && <p>Loading...</p>}
            {!loading && (
                <>
                    <input
                        name="orgname"
                        type="text"
                        placeholder="Organization Name"
                        className="my-4 px-2 py-1 border"
                        onChange={(ev) => handleChange(ev)}
                        defaultValue={formState.orgname}
                    />
                    <input
                        name="address"
                        type="text"
                        placeholder="Organization Address"
                        className="my-4 px-2 py-1 border"
                        onChange={(ev) => handleChange(ev)}
                        defaultValue={formState.address}
                    />
                    <input
                        name="providername"
                        type="text"
                        placeholder="Provider Name / Attorney Name"
                        className="my-4 px-2 py-1 border"
                        onChange={(ev) => handleChange(ev)}
                        defaultValue={formState.providername}
                    />
                    <input
                        name="contact"
                        type="text"
                        placeholder="Contact Person"
                        className="my-4 px-2 py-1 border"
                        onChange={(ev) => handleChange(ev)}
                        defaultValue={formState.contact}
                    />
                    <input
                        name="email"
                        type="text"
                        placeholder="Contact Email"
                        className="my-4 px-2 py-1 border"
                        onChange={(ev) => handleChange(ev)}
                        defaultValue={formState.email}
                    />
                    <input
                        name="phone"
                        type="text"
                        placeholder="Contact Phone Number"
                        className="my-4 px-2 py-1 border"
                        onChange={(ev) => handleChange(ev)}
                        defaultValue={formState.phone}
                    />
                    <input
                        name="fax"
                        type="text"
                        placeholder="Contact Fax Number"
                        className="my-4 px-2 py-1 border"
                        onChange={(ev) => handleChange(ev)}
                        defaultValue={formState.fax}
                    />
                    <input
                        name="license"
                        type="text"
                        placeholder="License Number (if applicable)"
                        className="my-4 px-2 py-1 border"
                        onChange={(ev) => handleChange(ev)}
                        defaultValue={formState.license}
                    />
                    <input
                        name="url"
                        type="text"
                        placeholder="Website URL"
                        className="my-4 px-2 py-1 border"
                        onChange={(ev) => handleChange(ev)}
                        defaultValue={formState.url}
                    />
                    <select
                        className="my-4 px-2 py-1 border"
                        name="sponsorship"
                        onChange={(ev) => handleChange(ev)}
                        defaultValue={formState.sponsorship}
                    >
                        <option value="">Select a Sponsorship Tier</option>
                        <option value="Platinum">
                            Platinum: $25,000 yearly
                        </option>
                        <option value="Gold">Gold: $10,000 yearly</option>
                        <option value="Silver">Silver: $5,000 yearly</option>
                        <option value="Bronze">Bronze: $2,500 yearly</option>
                    </select>
                    <button className="my-4 px-2 py-1 bg-red-600 text-white hover:bg-red-500 hover:underline transition-all w-1/2 mx-auto">
                        Submit
                    </button>
                </>
            )}
        </form>
    );
};

export default ApplicationForm;
