import {Component, OnInit} from '@angular/core';
import {WindowTab} from "../model/Tab";
import {ProfessionalExperienceWindowTab} from "../model/ProfessionalExperienceWindowTab";

@Component({
  selector: 'app-professional-experience-window',
  templateUrl: './professional-experience-window.component.html',
  styleUrls: ['./professional-experience-window.component.sass']
})
export class ProfessionalExperienceWindowComponent implements OnInit {

  readonly windowTitleBar: string = 'Professional Experience';

  protected professionalExperienceWindowTabs: ProfessionalExperienceWindowTab[] = [
    {
      id: 'tab-totvs',
      title: 'TOTVS',
      selected: true,
      companyName: 'Wealth Systems/TOTVS',
      location: 'Cascavel - PR, Brazil',
      workTypes: ['On-site'],
      skills: ['Java', 'PostgreSQL', 'Git', 'Apache Maven', 'JavaScript', 'Redmine', 'JSP', 'CSS', 'HTML', 'Hibernate'],
      duration: 'jul/2016 - dec/2016',
      roles: ['Intern'],
      description: 'Considering this was a internship (and also my first professional experience), it was more focused on learning how to work on a tech company than doing any actual work. I\'ve explored a bit of some parts, like development, testing, and doing some analysis, on the company\'s agricultural systems.'
    },
    {
      id: 'tab-syngular',
      title: 'Syngular Systems',
      selected: false,
      companyName: 'Syngular Systems (former Aguiar Informática)',
      location: 'Cascavel - PR, Brazil',
      workTypes: ['On-site (2017-2018)', 'Remote (2019)'],
      skills: ['Java', 'PostgreSQL', 'Git', 'Apache Maven', 'Apache Tomcat', 'Primefaces', 'Jasper Reports', 'CSS', 'HTML', 'Hibernate', 'Jenkins', 'JSF'],
      duration: 'aug/2017 - dec/2018 and jun/2019 - jul/2019',
      roles: ['Intern (2017-2018)', 'Freelancer (2019)'],
      description: 'Internship followed by a brief time as a freelancer, focused on development, but with some performances on testing and giving customer support. Primary performance was in an ERP system, with registrations, issuance of invoices and NFC-e, creation of a module for issuing banking slips along with shipping and return files, sales/inventory management, cash flow, among others. I also had a brief role refactoring an agricultural system for managing crops and seeds.'
    },
    {
      id: 'tab-matera',
      title: 'Matera',
      selected: false,
      companyName: 'Matera',
      location: 'Maringá - PR, Brazil',
      workTypes: ['On-site (jan/2020 - mar/2020)', 'Remote (mar/2020 - feb/2022)'],
      skills: [],
      duration: 'jan/2020 - mar/2022',
      roles: ['Junior Software Developer (2020-2021)', 'Mid-level Software Developer (2022)'],
      description: 'Mainly system development, but brief performances on technical analysis and testing. First performance was with an Internet Banking system, primarily fixing bugs in the back-end with Spring and PL/SQL. Second role was in the development, technical analysis and assistance in testing the Brazilian Payment System (SPB), managing the flow of message transmissions between FIs and the BC (Brazil\'s central bank), the cashier pilot screen, which verifies current transactions in the system, and between other modules of the same.'
    },
    {
      id: 'tab-cit',
      title: 'CI&T',
      selected: false,
      companyName: 'CI&T',
      location: 'Maringá - PR, Brazil',
      workTypes: ['Remote (since mar/2022)'],
      skills: ['Java', 'Spring Framework', 'TypeScript', 'Git', 'Apache Maven', 'JavaScript', 'REST APIs', 'Node.js', 'Azure DevOps', 'MongoDB', 'Ionic', 'NoSQL', 'Mockito', 'Angular', 'Docker/Docker compose', 'CSS', 'Jira', 'Hibernate', 'JUnit', 'Jest/Karma', 'Kafka', 'Bash', 'OpenAPI specification'],
      duration: 'since mar/2022',
      roles: ['Mid-level Software Developer'],
      description: 'Experience focused on development, with brief aid on testing. First role was in a project where I helped to develop a microservice using Spring, exposing data via REST API, searching from a database in MongoDB. The project is part of the initial APIs for the Open Insurance project in Brazil. Second role was working on a bank\'s insurance management application, where I helped develop the front-end in Angular/Ionic, using TypeScript, Ngrx, testing on Android and iOS. Third role was working again in a microsevice, exposing data from a MongoDB database via REST API, but now using Kafka brokers to send and consume messages.'
    },
  ];

  constructor() {
    // Empty
  }

  ngOnInit(): void {
    // Empty
  }

  changeSelectedTab(selectedTab: WindowTab): void {
    if (selectedTab.selected)
      return;

    this.professionalExperienceWindowTabs.forEach(tab => {
      tab.selected = selectedTab.id === tab.id
    })
  }
}
