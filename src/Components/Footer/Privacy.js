import React from "react";
import { Media } from "reactstrap";

const Privacy = () => {
  return (
    <div>
      <Media>
        <Media body>
          <Media heading>Privacy Notice</Media>
        </Media>
      </Media>
      <br />
      <Media className="mt-1">
        <Media body>
          <Media heading>Personal identification information</Media>
          <p>
            We may collect personal identification information from Users in a
            variety of ways, including, but not limited to, when Users visit our
            site, register on the site, place an order, subscribe to the
            newsletter, fill out a form, and in connection with other
            activities, services, features or resources we make available on our
            Site.
          </p>
          <p>
            Users may be asked for, as appropriate, name, email address, mailing
            address, phone number, credit card information. Users may, however,
            visit our Site anonymously. We will collect personal identification
            information from Users only if they voluntarily submit such
            information to us. Users can always refuse to supply personally
            identification information, except that it may prevent them from
            engaging in certain Site related activities.
          </p>
        </Media>
      </Media>

      <br />

      <Media className="mt-1">
        <Media body>
          <Media heading>Web browser cookies</Media>
          Our Site may use "cookies" to enhance User experience. User's web
          browser places cookies on their hard drive for record-keeping purposes
          and sometimes to track information about them. User may choose to set
          their web browser to refuse cookies, or to alert you when cookies are
          being sent. If they do so, note that some parts of the Site may not
          function properly.
        </Media>
      </Media>

      <br />

      <Media className="mt-1">
        <Media body>
          <Media heading>How we protect your information</Media>
          We adopt appropriate data collection, storage and processing practices
          and security measures to protect against unauthorized access,
          alteration, disclosure or destruction of your personal information,
          username, password, transaction information and data stored on our
          Site
        </Media>
      </Media>

      <br />

      <Media className="mt-1">
        <Media body>
          <Media heading>Your acceptance of these terms</Media>
          By using this Site, you signify your acceptance of this policy. If you
          do not agree to this policy, please do not use our Site. Your
          continued use of the Site following the posting of changes to this
          policy will be deemed your acceptance of those changes.
        </Media>
      </Media>
      <br />
      <br />
    </div>
  );
};

export default Privacy;
