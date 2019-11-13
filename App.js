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
