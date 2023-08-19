import {Component, OnInit} from '@angular/core';
import {Skill} from "../../model/Skill";

@Component({
  selector: 'app-what-do-i-know',
  templateUrl: './what-do-i-know.component.html',
  styleUrls: ['./what-do-i-know.component.sass']
})
export class WhatDoIKnowComponent implements OnInit {

  readonly skills: Skill[] = [
    {
      area: '⚙️ Back-end',
      techs: [
        {
          description: 'Java',
          subTechs: ['Spring Framework', 'JPA/Hibernate', 'Maven', 'JUnit/Mockito']
        },
        {
          description: 'Javascript/Typescript',
          subTechs: ['Node.js/NPM', 'Jest', 'NestJS']
        },
        {
          description: 'Database/Messaging',
          subTechs: ['PostgreSQL', 'Oracle', 'MSSQL 2008 and 2016', 'CosmosDB (MongoDB)', 'Liquibase', 'IBM MQ', 'Amazon SQS', 'Kafka']
        },
        {
          description: 'General scripting',
          subTechs: ['Bash', 'Groovy/Jenkinsfile']
        },
        {
          description: 'Other',
          subTechs: ['Docker', 'Tomcat/Wildfly servers']
        }
      ]
    },
    {
      area: '🖥 Front-end',
      techs: [
        {
          description: 'Basics',
          subTechs: ['HTML 5', 'CSS', 'Javascript']
        },
        {
          description: 'Frameworks',
          subTechs: ['Angular', 'React', 'JSP/JSF', 'Primefaces', 'Materialize/Material design', 'RxJs', 'NgRx', 'Sass/Scss']
        }
      ]
    },
    {
      area: '🛠 Other tools',
      techs: [
        {
          description: 'Repositories',
          subTechs: ['Git', 'Azure', 'GitHub', 'Bitbucket', 'Kallithea']
        },
        {
          description: 'Project management',
          subTechs: ['Jira', 'Redmine']
        }
      ]
    }
  ]

  constructor() {
    // Empty
  }

  ngOnInit(): void {
    // Empty
  }

}
