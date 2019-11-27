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

    renderList() {
    return (
      <ul>
        {this.state.repos.map(repo => (
          <li  key={repo.id}>
               {<img src={this.state.avatar} alt="Profile-pic" height="12" width="12"></img>}
               {repo.name}
               <a href={repo.html_url}>Link</a>

          </li>
        ))}
      </ul>
    )
  }
/*
  This function is essential to create the pie chart
  as it removes all duplicates where a language is used
  in another repository.
 */
  listOfLanguages(){
    const arr = [];
    {this.state.languages.map(language => (arr.push(language.language)))};
    var langsUnique = ([...new Set(arr)]);

    return(langsUnique)
  }

  renderLanguages(){
    const arr = [];
    {this.state.languages.map(language => (arr.push(language.language)))};
    var langsUnique = ([...new Set(arr)]);
    var arenderInfo() {
    return (
      <div className='renders'>
        <p> <UserIcon src={this.state.avatar} alt="this.name" /></p>
        <p>{this.state.name} | {this.state.id}</p>



        <div className='chart'>
        <Popup scrolling="yes" trigger={<button className="button"> Followers vs Following </button>} modal closeOnDocumentClick>
          <div>

          <div><Chart chartData={this.state.chartData}/></div>

          <p>Since joining Github, this user has gained {this.state.followers} followers
          and has followed {this.state.following}.</p>
          </div>
        </Popup>
        </div>




        <div className='languages'>
        <Popup scrolling="yes" trigger={<button className="button"> Most Common Languages </button>} modal closeOnDocumentClick>
          <div>
          <div><PieChart pieChartData={this.state.pieChartData}/></div>

          <p>This user's languages consist of {this.listOfLanguages()}</p>
          </div>
        </Popup>
        </div>
      </div>
    );
  }tOfLanguages()
    const dataLangs = this.renderLanguages()

    this.setState({
      pieChartData:{
        labels: labelLangs,
        datasets: [{
            label:'',
            backgroundColor: ['#f1c40f','#e67e22','#16a085','#2980b9','#DC143C', '#9932CC', '#808000','#D8BFD8','#F4A460','#FF0000'],
            data: dataLangs
        }]
    }
    })
  }

    getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


        <div className='languages'>
        <Popup scrolling="yes" trigger={<button className="button"> Most Common Languages </button>} modal closeOnDocumentClick>
          <div>
          <div><PieChart pieChartData={this.state.pieChartData}/></div>

          <p>This user's languages consist of {this.listOfLanguages()}</p>
          </div>
        </Popup>
        </div>
      </div>
    );




        <div className='chart'>
        <Popup scrolling="yes" trigger={<button className="button"> Followers vs Following </button>} modal closeOnDocumentClick>
          <div>

          <div><Chart chartData={this.state.chartData}/></div>

          <p>Since joining Github, this user has gained {this.state.followers} followers
          and has followed {this.state.following}.</p>
          </div>
        </Popup>
        </div>
        <div className='languages'>
        <Popup scrolling="yes" trigger={<button className="button"> Most Common Languages </button>} modal closeOnDocumentClick>
          <div>
          <div><PieChart pieChartData={this.state.pieChartData}/></div>

          <p>This user's languages consist of {this.listOfLanguages()}</p>
          </div>
        </Popup>


        <div className='languages'>
        <Popup scrolling="yes" trigger={<button className="button"> Most Common Languages </button>} modal closeOnDocumentClick>
          <div>
          <div><PieChart pieChartData={this.state.pieChartData}/></div>

          <p>This user's languages consist of {this.listOfLanguages()}</p>
          </div>
        </Popup>
        </div>
      </div>
    );

        </div>
      </div>
    );
  }


export default App;

const UserIcon = styled('img')`
    position: 50px 700px;
    width: 350px;
    height: 350px;
    `


