import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl max-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to={"/"}
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-blue-400 rounded-lg text-white">
                Travel
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.google.com"
                  target="blank"
                  rel="noopener noreferer"
                >
                  Test Link
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="blank"
                  rel="noopener noreferer"
                >
                  About Us
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.google.com"
                  target="blank"
                  rel="noopener noreferer"
                >
                  Test Link
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="blank"
                  rel="noopener noreferer"
                >
                  About Us
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Privacy" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/about"
                  target="blank"
                  rel="noopener noreferer"
                >
                  Terms & Conditions
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="blank"
                  rel="noopener noreferer"
                >
                  Privacy Policy
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:justify-between sm:flex sm:items-center">
          <Footer.Copyright
            href="#"
            by="Travel's blog"
            year={new Date().getFullYear()}
          />
          <div className=" flex gap-6 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
