import React, {Fragment} from "react";
import {Link, useNavigate} from "react-router-dom";
import logo from '../../../Public/Images/test.png';


const CreateLead = () => {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: "",
    });
    const navigation = useNavigate();

    const handleChange = (property, value) => {
        setFormData(preObj => ({
            ...preObj,
            [property]: value
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log("fetch");
            const response = await fetch("api/lead/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                alert('Network response was not ok');
                return;
            }

            const data = await response.json();
            navigation('/');
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the data');
        }
    };

    return (
        <Fragment>
            <img src={logo} alt="Logo" style={{ width: '100px', height: '100px' }} />;

            <Link to="/">
                <button>List</button>
            </Link>

            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                    />
                </label>

                <label>
                    Enter your email:
                    <input
                        type="text"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                </label>

                <label>
                    Enter your message:
                    <input
                        type="text"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                    />
                </label>

                <input type="submit"/>
            </form>
        </Fragment>
    );
};

export default CreateLead;