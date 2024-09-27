import React, { useState } from "react";
import { useForm } from "react-cool-form";
import "./PostUpload.css";

const Field = ({ label, id, value, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} value={value} onChange={onChange} />
  </div>
);

const Select = ({ label, id, value, onChange, children }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <select id={id} value={value} onChange={onChange}>
      {children}
    </select>
  </div>
);

const Textarea = ({ label, id, value, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <textarea id={id} value={value} onChange={onChange} />
  </div>
);

const FileInput = ({ label, id, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input type="file" id={id} onChange={onChange} />
  </div>
);

function PostUpload() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null); // State to hold the uploaded file

  const { form, use } = useForm({
    defaultValues: { firstName: "", lastName: "", framework: "", message: "" },
    validate: {
      firstName: (value) => !!value || "First Name is required",
      lastName: (value) => !!value || "Last Name is required",
      framework: (value) => !!value || "Framework selection is required",
    },
    onSubmit: async (values) => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async operation
      alert(JSON.stringify({ ...values, file: file?.name }, undefined, 2)); // Include file name in alert
      setLoading(false);
    },
  });

  // Ensure the use hook is called correctly
  const { firstName, lastName, framework, message } = use(
    "firstName",
    "lastName",
    "framework",
    "message"
  );

  // Debugging: Log the values to see if they are defined
  console.log("Form Values:", {
    firstName,
    lastName,
    framework,
    message,
    file,
  });

  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the selected file
  };

  return (
    <div className="report_p">
      <form ref={form}>
        <Field
          label="First Name"
          id="first-name"
          name="firstName"
          value={firstName?.value || ""}
          onChange={firstName?.onChange}
        />
        {firstName?.error && <span>{firstName.error}</span>}

        <Field
          label="Last Name"
          id="last-name"
          name="lastName"
          value={lastName?.value || ""}
          onChange={lastName?.onChange}
        />
        {lastName?.error && <span>{lastName.error}</span>}

        <Select
          label="Framework"
          id="framework"
          name="framework"
          value={framework?.value || ""}
          onChange={framework?.onChange}
        >
          <option value="">select</option>
          <option value="gov">gov. Employee</option>
          <option value="citizen">citizen</option>
        </Select>
        {framework?.error && <span>{framework.error}</span>}

        <Textarea
          label="Message"
          id="message"
          name="message"
          value={message?.value || ""}
          onChange={message?.onChange}
        />

        <FileInput
          label="Upload File"
          id="file-upload"
          onChange={handleFileChange} // Handle file input change
        />

        <input
          type="submit"
          disabled={loading}
          value={loading ? "Submitting..." : "Submit"}
        />
      </form>
    </div>
  );
}

export default PostUpload;
