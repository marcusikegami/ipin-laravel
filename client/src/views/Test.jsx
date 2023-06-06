import axiosClient from "../axios-client";

const Test = () => {
    const test = async () => {
        const res = await axiosClient.get("/test");
        console.log(res);
    };

    return (
        <div>
            <button onClick={test}>Test</button>
        </div>
    );
};

export default Test;
