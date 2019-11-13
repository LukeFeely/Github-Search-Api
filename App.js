Test
import React, { Component } from 'react';
import axios from "axios";
import Popup from "reactjs-popup";
import './App.css';
import UserForm from "./components/UserForm";
import styled from 'styled-components';
import Chart from './components/Charts';
import PieChart from './components/PieChart';




class App extends Component {
  state = {
    name: null,
    id: null,
    avatar: null,
    followers: null,
    repos: [],
    languages: [],
    chartData: [],
    pieChartData:[]
  }

  /*Function which uses UserForm to pull all information
about each githubber which is desired.
*/
  retrieveInfo = async (e) => {
    e.preventDefault();

    const user = e.target.elements.username.value
    var users = `https://api.github.com/users/${user}`;
    var repos = `https://api.github.com/users/${user}/repos`;
    await axios.get(users)
      .then((res) => {

        const name = res.data.name;
        const id = res.data.id;
        const avatar = res.data.avatar_url;
        const followers = res.data.followers;
        const following = res.data.following;
        this.setState({ name, id, avatar, followers, following });

      })
    await axios.get(repos)
      .then((res) => {
        const repos = res.data;
        const languages = res.data;
        this.setState({ repos , languages });
      })

      this.getChartData();
      this.getPieChartData();


  }
