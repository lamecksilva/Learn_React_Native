import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-dark text-white p-4 text-center">
          Copyright &copy; {new Date().getFullYear()} SensHome - Lameck Sandro
        </footer>
      </div>
    );
  }
}

export default Footer;
