/** @jsx React.DOM */

var React   = require('react');
var Profile = require('./Profile.jsx');

React.renderComponent(
    <Profile
        username="Simon"
        bio="My name is Simon. I make websites"
        avatar="http://simonsmith.io/assets/images/me.jpg"
    />,
    document.body);
