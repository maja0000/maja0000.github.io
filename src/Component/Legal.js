import React, { PureComponent } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import "../css/Legal.css";

function Legal() {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root} className="legal">
      <h1>Impressum</h1>
      <p>Angaben gemäß § 5 TMG</p>
      <p>Wild Code School: Students Heller, Gach and Kolem</p>
      <p>Oudenarder Straße 16, Building E23 </p>
      <p> 13347 Berlin</p>

      <h1>Privacy Policy for MyMeteo</h1>

      <p>
        At MyMeteo, accessible from https://juliaheller.github.io/myMeteo/, one
        of our main priorities is the privacy of our visitors. This Privacy
        Policy document contains types of information that is collected and
        recorded by MyMeteo and how we use it.
      </p>

      <p>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us.
      </p>

      <h2>Log Files</h2>

      <p>
        MyMeteo follows a standard procedure of using log files. These files log
        visitors when they visit websites. All hosting companies do this and a
        part of hosting services' analytics. The information collected by log
        files include internet protocol (IP) addresses, browser type, Internet
        Service Provider (ISP), date and time stamp, referring/exit pages, and
        possibly the number of clicks. These are not linked to any information
        that is personally identifiable. The purpose of the information is for
        analyzing trends, administering the site, tracking users' movement on
        the website, and gathering demographic information.
      </p>

      <h2>Privacy Policies</h2>

      <p>
        You may consult this list to find the Privacy Policy for each of the
        advertising partners of MyMeteo. Our Privacy Policy was created with the
        help of the{" "}
        <a href="https://www.privacypolicygenerator.org">
          Free Privacy Policy Generator
        </a>{" "}
        and the{" "}
        <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">
          Privacy Policy Generator Online
        </a>
        .
      </p>

      <p>
        Third-party ad servers or ad networks uses technologies like cookies,
        JavaScript, or Web Beacons that are used in their respective
        advertisements and links that appear on MyMeteo, which are sent directly
        to users' browser. They automatically receive your IP address when this
        occurs. These technologies are used to measure the effectiveness of
        their advertising campaigns and/or to personalize the advertising
        content that you see on websites that you visit.
      </p>

      <p>
        Note that MyMeteo has no access to or control over these cookies that
        are used by third-party advertisers.
      </p>

      <h2>Third Party Privacy Policies</h2>

      <p>
        MyMeteo's Privacy Policy does not apply to other advertisers or
        websites. Thus, we are advising you to consult the respective Privacy
        Policies of these third-party ad servers for more detailed information.
        It may include their practices and instructions about how to opt-out of
        certain options. You may find a complete list of these Privacy Policies
        and their links here: Privacy Policy Links.
      </p>

      <p>
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with
        specific web browsers, it can be found at the browsers' respective
        websites. What Are Cookies?
      </p>

      <h2>Children's Information</h2>

      <p>
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity.
      </p>

      <p>
        MyMeteo does not knowingly collect any Personal Identifiable Information
        from children under the age of 13. If you think that your child provided
        this kind of information on our website, we strongly encourage you to
        contact us immediately and we will do our best efforts to promptly
        remove such information from our records.
      </p>

      <h2>Online Privacy Policy Only</h2>

      <p>
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in MyMeteo. This policy is not applicable to any
        information collected offline or via channels other than this website.
      </p>

      <h2>Consent</h2>

      <p>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its Terms and Conditions.
      </p>
    </div>
  );
}
export default Legal;
