import React, { Component } from 'react'
import './css/Main.css'
import { Nav, Tab, Col, Row, InputGroup, FormControl, Button, Card, Tabs, Form } from 'react-bootstrap'
import HeaderForAuth from './HeaderForAuth'
import Server from '../Services/Server'

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.sendAbstractDissertationRequest0 = this.sendAbstractDissertationRequest0.bind(this);
        this.sendAbstractDissertationRequest1 = this.sendAbstractDissertationRequest1.bind(this);
        this.sendAbstractDissertationRequest2 = this.sendAbstractDissertationRequest2.bind(this);
        this.sendAbstractDissertationRequest3 = this.sendAbstractDissertationRequest3.bind(this);
        this.sendAbstractDissertationRequest4 = this.sendAbstractDissertationRequest4.bind(this);


        this.sendDissertationRequest0 = this.sendDissertationRequest0.bind(this);
        this.sendDissertationRequest1 = this.sendDissertationRequest1.bind(this);
        this.sendDissertationRequest2 = this.sendDissertationRequest2.bind(this);
        this.sendDissertationRequest3 = this.sendDissertationRequest3.bind(this);
        this.sendDissertationRequest4 = this.sendDissertationRequest4.bind(this);

        this.sendPeriodicalRequest0 = this.sendPeriodicalRequest0.bind(this);
        this.sendPeriodicalRequest1 = this.sendPeriodicalRequest1.bind(this);
        this.sendPeriodicalRequest2 = this.sendPeriodicalRequest2.bind(this);
        this.sendPeriodicalRequest3 = this.sendPeriodicalRequest3.bind(this);
        this.sendPeriodicalRequest4 = this.sendPeriodicalRequest4.bind(this);

        this.sendElectronicRequest0 = this.sendElectronicRequest0.bind(this);
        this.sendElectronicRequest1 = this.sendElectronicRequest1.bind(this);
        this.sendElectronicRequest2 = this.sendElectronicRequest2.bind(this);
        this.sendElectronicRequest3 = this.sendElectronicRequest3.bind(this);
        this.sendElectronicRequest4 = this.sendElectronicRequest4.bind(this);

        this.sendBookRequest0 = this.sendBookRequest0.bind(this);
        this.sendBookRequest1 = this.sendBookRequest1.bind(this);
        this.sendBookRequest2 = this.sendBookRequest2.bind(this);
        this.sendBookRequest3 = this.sendBookRequest3.bind(this);
        this.sendBookRequest4 = this.sendBookRequest4.bind(this);

        this.getJobName = this.getJobName.bind(this);
        this.getYearOfPublication = this.getYearOfPublication.bind(this);
        this.getPublication = this.getPublication.bind(this);
        this.getLinkToSource = this.getLinkToSource.bind(this);

        this.getPlaceOfPublication = this.getPlaceOfPublication.bind(this);
        this.getNumberOfPages = this.getNumberOfPages.bind(this);
        this.getPublishingName = this.getPublishingName.bind(this);
        this.getSeries = this.getSeries.bind(this);
        this.getPeriodicSelectionNumber = this.getPeriodicSelectionNumber.bind(this);
        this.getPublicationNumberType = this.getPublicationNumberType.bind(this);

        this.getScientificDegreeName = this.getScientificDegreeName.bind(this);
        this.getScientificDegreeSpecialty = this.getScientificDegreeSpecialty.bind(this);
        this.getSpecialtyCode = this.getSpecialtyCode.bind(this);
        this.getSpecialtyName = this.getSpecialtyName.bind(this);

        this.getFirstName1 = this.getFirstName1.bind(this);
        this.getLastName1 = this.getLastName1.bind(this);
        this.getFathersName1 = this.getFathersName1.bind(this);

        this.getFirstName2 = this.getFirstName2.bind(this);
        this.getLastName2 = this.getLastName2.bind(this);
        this.getFathersName2 = this.getFathersName2.bind(this);

        this.getFirstName3 = this.getFirstName3.bind(this);
        this.getLastName3 = this.getLastName3.bind(this);
        this.getFathersName3 = this.getFathersName3.bind(this);

        this.getFirstName4 = this.getFirstName4.bind(this);
        this.getLastName4 = this.getLastName4.bind(this);
        this.getFathersName4 = this.getFathersName4.bind(this);

        this.state = {
            jobName: '',
            yearOfPublication: '',
            publication: '',
            linkToSource: '',
            numberOfPages: '',
            publishingName: '',
            series: '',
            periodicSelectionNumber: '',
            publicationNumberType: '',
            placeOfPublication: '',
            scientificDegreeName:'',
            scientificDegreeSpecialty:'',
            specialtyCode:'',
            specialtyName:'',

            data: '',
            loading: false,

            firstName1: '',
            lastName1: '',
            surname1: '',
            firstName2: '',
            lastName2: '',
            surname2: '',
            firstName3: '',
            lastName3: '',
            surname3: '',
            firstName4: '',
            lastName4: '',
            surname4: ''
        };
    };
    getSpecialtyName(e){
        this.setState({
            specialtyName: e.target.value
        });
    };
    getScientificDegreeName(e){
        this.setState({
            scientificDegreeName: e.target.value
        });
    };
    getScientificDegreeSpecialty(e){
        this.setState({
            scientificDegreeSpecialty: e.target.value
        });
    };
    getSpecialtyCode(e){
        this.setState({
            specialtyCode: e.target.value
        });
    };
    getFirstName1(e) {
        this.setState({
            firstName1: e.target.value
        });
    };
    getLastName1(e) {
        this.setState({
            lastName1: e.target.value
        });
    };
    getFathersName1(e) {
        this.setState({
            surname1: e.target.value
        });
    };
    getFirstName2(e) {
        this.setState({
            firstName2: e.target.value
        });
    };
    getLastName2(e) {
        this.setState({
            lastName2: e.target.value
        });
    };
    getFathersName2(e) {
        this.setState({
            surname2: e.target.value
        });
    };
    getFirstName3(e) {
        this.setState({
            firstName3: e.target.value
        });
    };
    getLastName3(e) {
        this.setState({
            lastName3: e.target.value
        });
    };
    getFathersName3(e) {
        this.setState({
            surname3: e.target.value
        });
    };
    getFirstName4(e) {
        this.setState({
            firstName4: e.target.value
        });
    };
    getLastName4(e) {
        this.setState({
            lastName4: e.target.value
        });
    };
    getFathersName4(e) {
        this.setState({
            surname4: e.target.value
        });
    };
    getJobName(e) {
        this.setState({
            jobName: e.target.value
        });
    };
    getYearOfPublication(e) {
        this.setState({
            yearOfPublication: e.target.value
        });
    };
    getPublication(e) {
        this.setState({
            publication: e.target.value
        });
    };
    getLinkToSource(e) {
        this.setState({
            linkToSource: e.target.value
        });
    };
    getNumberOfPages(e) {
        this.setState({
            numberOfPages: e.target.value
        });
    };
    getPeriodicSelectionNumber(e) {
        this.setState({
            periodicSelectionNumber: e.target.value
        });
    };
    getPlaceOfPublication(e) {
        this.setState({
            placeOfPublication: e.target.value
        });
    };
    getPublishingName(e) {
        this.setState({
            publishingName: e.target.value
        });
    };
    getPublicationNumberType(e) {
        this.setState({
            publicationNumberType: e.target.value
        });
    };
    getSeries(e) {
        this.setState({
            series: e.target.value
        });
    };
    sendElectronicRequest0(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && this.state.linkToSource !== '' && !isNaN(this.state.yearOfPublication)) {
            this.setState({
                loading: true
            });
            const ElectronicSource0 = {
                'workName': this.state.jobName,
                'yearOfPublication': this.state.yearOfPublication,
                'linkToSource': this.state.linkToSource,
                'publication': this.state.publication
            };
            Server.electronicSourceWithHistory(ElectronicSource0, localStorage.getItem('email')).then(res => {
                this.setState({
                    jobName: '',
                    yearOfPublication: '',
                    publication: '',
                    linkToSource: '',
                    data: res,
                    loading: false
                })
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendElectronicRequest1(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && this.state.linkToSource !== '' && !isNaN(this.state.yearOfPublication) &&
            this.state.firstName1 !== '') {
            this.setState({
                loading: true
            });
            const ElectronicSource1 = {
                'workName': this.state.jobName,
                'yearOfPublication': this.state.yearOfPublication,
                'linkToSource': this.state.linkToSource,
                'publication': this.state.publication,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                }]
            };
            Server.electronicSourceWithHistory(ElectronicSource1, localStorage.getItem('email')).then(res => {
                this.setState({
                    jobName: '',
                    yearOfPublication: '',
                    publication: '',
                    linkToSource: '',
                    data: res,
                    loading: false,
                    firstName1: '',
                    lastName1: '',
                    surname1: ''
                })
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendElectronicRequest2(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && this.state.linkToSource !== '' && !isNaN(this.state.yearOfPublication) &&
            this.state.firstName1 !== '' && this.state.firstName2 !== '') {
            this.setState({
                loading: true
            });
            const ElectronicSource2 = {
                'workName': this.state.jobName,
                'yearOfPublication': this.state.yearOfPublication,
                'linkToSource': this.state.linkToSource,
                'publication': this.state.publication,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                }
                ]
            };
            Server.electronicSourceWithHistory(ElectronicSource2, localStorage.getItem('email')).then(res => {
                this.setState({
                    jobName: '',
                    yearOfPublication: '',
                    publication: '',
                    linkToSource: '',
                    data: res,
                    loading: false,
                    firstName1: '',
                    lastName1: '',
                    surname1: '',
                    firstName2: '',
                    lastName2: '',
                    surname2: ''
                })
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendElectronicRequest3(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && this.state.linkToSource !== '' && !isNaN(this.state.yearOfPublication) &&
            this.state.firstName1 !== '' && this.state.firstName2 !== '' && this.state.firstName3 !== '') {
            this.setState({
                loading: true
            });
            const ElectronicSource3 = {
                'workName': this.state.jobName,
                'yearOfPublication': this.state.yearOfPublication,
                'linkToSource': this.state.linkToSource,
                'publication': this.state.publication,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                },
                {
                    'firstName': this.state.firstName3,
                    'lastName': this.state.lastName3,
                    'fathersName': this.state.surname3
                }
                ]
            };
            Server.electronicSourceWithHistory(ElectronicSource3, localStorage.getItem('email')).then(res => {
                this.setState({
                    jobName: '',
                    yearOfPublication: '',
                    publication: '',
                    linkToSource: '',
                    data: res,
                    loading: false,
                    firstName1: '',
                    lastName1: '',
                    surname1: '',
                    firstName2: '',
                    lastName2: '',
                    surname2: '',
                    firstName3: '',
                    lastName3: '',
                    surname3: ''
                })
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendElectronicRequest4(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && this.state.linkToSource !== '' && !isNaN(this.state.yearOfPublication) &&
            this.state.firstName1 !== '' && this.state.firstName2 !== '' && this.state.firstName3 !== '' && this.state.firstName4 !== '') {
            this.setState({
                loading: true
            });
            const ElectronicSource4 = {
                'workName': this.state.jobName,
                'yearOfPublication': this.state.yearOfPublication,
                'linkToSource': this.state.linkToSource,
                'publication': this.state.publication,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                },
                {
                    'firstName': this.state.firstName3,
                    'lastName': this.state.lastName3,
                    'fathersName': this.state.surname3
                },
                {
                    'firstName': this.state.firstName4,
                    'lastName': this.state.lastName4,
                    'fathersName': this.state.surname4
                }
                ]
            };
            Server.electronicSourceWithHistory(ElectronicSource4, localStorage.getItem('email')).then(res => {
                this.setState({
                    jobName: '',
                    yearOfPublication: '',
                    publication: '',
                    linkToSource: '',


                    data: res,
                    loading: false,

                    firstName1: '',
                    lastName1: '',
                    surname1: '',
                    firstName2: '',
                    lastName2: '',
                    surname2: '',
                    firstName3: '',
                    lastName3: '',
                    surname3: '',
                    firstName4: '',
                    lastName4: '',
                    surname4: ''
                })
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendBookRequest0(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber)) {
            this.setState({
                loading: true
            });
            const BookSource0 = {
                'placeOfPublication': this.state.placeOfPublication,
                'publishingHouse': this.state.publication,
                'yearOfPublication': this.yearOfPublication,
                'numberOfPages': this.state.numberOfPages,
                'publishingName': this.state.publishingName,
                'series': this.state.series,
                'periodicSelectionNumber': this.state.periodicSelectionNumber,
                'publicationNumberType': this.state.publicationNumberType,
                'workName': this.state.jobName
            };
            Server.bookSourceWithHistory(BookSource0, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    placeOfPublication: '',
                    publication: '',
                    yearOfPublication: '',
                    numberOfPages: '',
                    publishingName: '',
                    series: '',
                    periodicSelectionNumber: '',
                    publicationNumberType: '',
                    jobName: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        };
    };
    sendBookRequest1(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
            this.state.firstName1 !== '') {
            this.setState({
                loading: true
            });
            const BookSource1 = {
                'placeOfPublication': this.state.placeOfPublication,
                'publishingHouse': this.state.publication,
                'yearOfPublication': this.yearOfPublication,
                'numberOfPages': this.state.numberOfPages,
                'publishingName': this.state.publishingName,
                'series': this.state.series,
                'periodicSelectionNumber': this.state.periodicSelectionNumber,
                'publicationNumberType': this.state.publicationNumberType,
                'workName': this.state.jobName,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                }]
            };
            Server.bookSourceWithHistory(BookSource1, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    placeOfPublication: '',
                    publication: '',
                    yearOfPublication: '',
                    numberOfPages: '',
                    publishingName: '',
                    series: '',
                    periodicSelectionNumber: '',
                    publicationNumberType: '',
                    jobName: '',

                    firstName1: '',
                    lastName1: '',
                    surname1: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        };
    };
    sendBookRequest2(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
            this.state.firstName1 !== '' && this.state.firstName2 !== '') {
            this.setState({
                loading: true
            });
            const BookSource2 = {
                'placeOfPublication': this.state.placeOfPublication,
                'publishingHouse': this.state.publication,
                'yearOfPublication': this.yearOfPublication,
                'numberOfPages': this.state.numberOfPages,
                'publishingName': this.state.publishingName,
                'series': this.state.series,
                'periodicSelectionNumber': this.state.periodicSelectionNumber,
                'publicationNumberType': this.state.publicationNumberType,
                'workName': this.state.jobName,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                }
                ]
            };
            Server.bookSourceWithHistory(BookSource2, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    placeOfPublication: '',
                    publication: '',
                    yearOfPublication: '',
                    numberOfPages: '',
                    publishingName: '',
                    series: '',
                    periodicSelectionNumber: '',
                    publicationNumberType: '',
                    jobName: '',

                    firstName1: '',
                    lastName1: '',
                    surname1: '',
                    firstName2: '',
                    lastName2: '',
                    surname2: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        };
    };
    sendBookRequest3(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
            this.state.firstName1 !== '' && this.state.firstName2 !== '' && this.state.firstName3 !== '') {
            this.setState({
                loading: true
            });
            const BookSource3 = {
                'placeOfPublication': this.state.placeOfPublication,
                'publishingHouse': this.state.publication,
                'yearOfPublication': this.yearOfPublication,
                'numberOfPages': this.state.numberOfPages,
                'publishingName': this.state.publishingName,
                'series': this.state.series,
                'periodicSelectionNumber': this.state.periodicSelectionNumber,
                'publicationNumberType': this.state.publicationNumberType,
                'workName': this.state.jobName,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                },
                {
                    'firstName': this.state.firstName3,
                    'lastName': this.state.lastName3,
                    'fathersName': this.state.surname3
                }
                ]
            };
            Server.bookSourceWithHistory(BookSource3, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    placeOfPublication: '',
                    publication: '',
                    yearOfPublication: '',
                    numberOfPages: '',
                    publishingName: '',
                    series: '',
                    periodicSelectionNumber: '',
                    publicationNumberType: '',
                    jobName: '',

                    firstName1: '',
                    lastName1: '',
                    surname1: '',
                    firstName2: '',
                    lastName2: '',
                    surname2: '',
                    firstName3: '',
                    lastName3: '',
                    surname3: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        };
    };
    sendBookRequest4(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
            this.state.firstName1 !== '' && this.state.firstName2 !== '' && this.state.firstName3 !== '' && this.state.firstName4 !== '') {
            this.setState({
                loading: true
            });
            const BookSource4 = {
                'placeOfPublication': this.state.placeOfPublication,
                'publishingHouse': this.state.publication,
                'yearOfPublication': this.yearOfPublication,
                'numberOfPages': this.state.numberOfPages,
                'publishingName': this.state.publishingName,
                'series': this.state.series,
                'periodicSelectionNumber': this.state.periodicSelectionNumber,
                'publicationNumberType': this.state.publicationNumberType,
                'workName': this.state.jobName,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                },
                {
                    'firstName': this.state.firstName3,
                    'lastName': this.state.lastName3,
                    'fathersName': this.state.surname3
                },
                {
                    'firstName': this.state.firstName4,
                    'lastName': this.state.lastName4,
                    'fathersName': this.state.surname4
                }
                ]
            };
            Server.bookSourceWithHistory(BookSource4, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    placeOfPublication: '',
                    publication: '',
                    yearOfPublication: '',
                    numberOfPages: '',
                    publishingName: '',
                    series: '',
                    periodicSelectionNumber: '',
                    publicationNumberType: '',
                    jobName: '',

                    firstName1: '',
                    lastName1: '',
                    surname1: '',
                    firstName2: '',
                    lastName2: '',
                    surname2: '',
                    firstName3: '',
                    lastName3: '',
                    surname3: '',
                    firstName4: '',
                    lastName4: '',
                    surname4: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        };
    };
    sendPeriodicalRequest0(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber)) {
            this.setState({
                loading: true
            });
            const PeriodicalSource0 = {
                "yearOfPublication": this.state.yearOfPublication,
                "publication": this.state.publishingName,
                "periodicSelectionNumber": this.state.periodicSelectionNumber,
                "pages": this.state.pages,
                "workName": this.state.jobName
            }
            Server.periodicalSourceWithHistory(PeriodicalSource0, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    yearOfPublication: '',
                    publishingName: '',
                    periodicSelectionNumber: '',
                    pages: '',
                    jobName: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendPeriodicalRequest1(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
            this.state.firstName1 !== '') {
            this.setState({
                loading: true
            });
            const PeriodicalSource1 = {
                "yearOfPublication": this.state.yearOfPublication,
                "publication": this.state.publishingName,
                "periodicSelectionNumber": this.state.periodicSelectionNumber,
                "pages": this.state.pages,
                "workName": this.state.jobName,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                }]
            }
            Server.periodicalSourceWithHistory(PeriodicalSource1, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    yearOfPublication: '',
                    publishingName: '',
                    periodicSelectionNumber: '',
                    pages: '',
                    jobName: '',

                    firstName1: '',
                    lastName1: '',
                    surname1: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendPeriodicalRequest2(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
            this.state.firstName1 !== '' && this.state.firstName2 !=='') {
            this.setState({
                loading: true
            });
            const PeriodicalSource2 = {
                "yearOfPublication": this.state.yearOfPublication,
                "publication": this.state.publishingName,
                "periodicSelectionNumber": this.state.periodicSelectionNumber,
                "pages": this.state.pages,
                "workName": this.state.jobName,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                }]
            }
            Server.periodicalSourceWithHistory(PeriodicalSource2, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    yearOfPublication: '',
                    publishingName: '',
                    periodicSelectionNumber: '',
                    pages: '',
                    jobName: '',

                    firstName1: '',
                    lastName1: '',
                    surname1: '',
                    firstName2: '',
                    lastName2: '',
                    surname2: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendPeriodicalRequest3(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
            this.state.firstName1 !== '' && this.state.firstName2 !== '' && this.state.firstName3 !== '') {
            this.setState({
                loading: true
            });
            const PeriodicalSource3 = {
                "yearOfPublication": this.state.yearOfPublication,
                "publication": this.state.publishingName,
                "periodicSelectionNumber": this.state.periodicSelectionNumber,
                "pages": this.state.pages,
                "workName": this.state.jobName,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                },
                {
                    'firstName': this.state.firstName3,
                    'lastName': this.state.lastName3,
                    'fathersName': this.state.surname3
                }]
            }
            Server.periodicalSourceWithHistory(PeriodicalSource3, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    yearOfPublication: '',
                    publishingName: '',
                    periodicSelectionNumber: '',
                    pages: '',
                    jobName: '',

                    firstName1: '',
                    lastName1: '',
                    surname1: '',
                    firstName2: '',
                    lastName2: '',
                    surname2: '',
                    firstName3: '',
                    lastName3: '',
                    surname3: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendPeriodicalRequest4(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
            this.state.firstName1 !== '' && this.state.firstName2 !== '' && this.state.firstName3 !== '' && 
            this.state.firstName4 !== '') {
            this.setState({
                loading: true
            });
            const PeriodicalSource4 = {
                "yearOfPublication": this.state.yearOfPublication,
                "publication": this.state.publishingName,
                "periodicSelectionNumber": this.state.periodicSelectionNumber,
                "pages": this.state.pages,
                "workName": this.state.jobName,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                },
                {
                    'firstName': this.state.firstName3,
                    'lastName': this.state.lastName3,
                    'fathersName': this.state.surname3
                },
                {
                    'firstName': this.state.firstName4,
                    'lastName': this.state.lastName4,
                    'fathersName': this.state.surname4
                }]
            }
            Server.periodicalSourceWithHistory(PeriodicalSource4, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    yearOfPublication: '',
                    publishingName: '',
                    periodicSelectionNumber: '',
                    pages: '',
                    jobName: '',

                    firstName1: '',
                    lastName1: '',
                    surname1: '',
                    firstName2: '',
                    lastName2: '',
                    surname2: '',
                    firstName3: '',
                    lastName3: '',
                    surname3: '',
                    firstName4: '',
                    lastName4: '',
                    surname4: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendDissertationRequest0(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
             !isNaN(this.state.specialtyCode)) {
            this.setState({
                loading: true
            });
            const DissertationSource0 = {
                "scientificDegreeName": this.state.scientificDegreeName,
                "scientificDegreeSpecialty": this.state.scientificDegreeSpecialty,
                "specialtyCode": this.state.specialtyCode,
                "placeOfPublication": this.state.placeOfPublication,
                "yearOfPublication": this.state.yearOfPublication,
                "numberOfPages": this.state.numberOfPages,
                "workName": this.state.jobName
            }
            Server.dissertationSourceWithHistory(DissertationSource0, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    yearOfPublication: '',
                    scientificDegreeName:'',
                    scientificDegreeSpecialty:'',
                    specialtyCode:'',
                    placeOfPublication:'',
                    numberOfPages:'',
                    jobName: '',

                    firstName1: '',
                    lastName1: '',
                    surname1: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendDissertationRequest1(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
            this.state.firstName1 !== ''&& !isNaN(this.state.specialtyCode)) {
            this.setState({
                loading: true
            });
            const DissertationSource1 = {
                "scientificDegreeName": this.state.scientificDegreeName,
                "scientificDegreeSpecialty": this.state.scientificDegreeSpecialty,
                "specialtyCode": this.state.specialtyCode,
                "placeOfPublication": this.state.placeOfPublication,
                "yearOfPublication": this.state.yearOfPublication,
                "numberOfPages": this.state.numberOfPages,
                "workName": this.state.jobName,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                }]
            }
            Server.dissertationSourceWithHistory(DissertationSource1, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    yearOfPublication: '',
                    scientificDegreeName:'',
                    scientificDegreeSpecialty:'',
                    specialtyCode:'',
                    placeOfPublication:'',
                    numberOfPages:'',
                    jobName: '',

                    firstName1: '',
                    lastName1: '',
                    surname1: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendDissertationRequest2(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
            this.state.firstName1 !== ''&& !isNaN(this.state.specialtyCode) && this.state.firstName2 !== '') {
            this.setState({
                loading: true
            });
            const DissertationSource2 = {
                "scientificDegreeName": this.state.scientificDegreeName,
                "scientificDegreeSpecialty": this.state.scientificDegreeSpecialty,
                "specialtyCode": this.state.specialtyCode,
                "placeOfPublication": this.state.placeOfPublication,
                "yearOfPublication": this.state.yearOfPublication,
                "numberOfPages": this.state.numberOfPages,
                "workName": this.state.jobName,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                }]
            }
            Server.dissertationSourceWithHistory(DissertationSource2, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    yearOfPublication: '',
                    scientificDegreeName:'',
                    scientificDegreeSpecialty:'',
                    specialtyCode:'',
                    placeOfPublication:'',
                    numberOfPages:'',
                    jobName: '',

                    firstName1: '',
                    lastName1: '',
                    surname1: '',
                    firstName2: '',
                    lastName2: '',
                    surname2: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendDissertationRequest3(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
            this.state.firstName1 !== ''&& !isNaN(this.state.specialtyCode) && this.state.firstName2 !== ''
            && this.state.firstName3 !== '') {
            this.setState({
                loading: true
            });
            const DissertationSource3 = {
                "scientificDegreeName": this.state.scientificDegreeName,
                "scientificDegreeSpecialty": this.state.scientificDegreeSpecialty,
                "specialtyCode": this.state.specialtyCode,
                "placeOfPublication": this.state.placeOfPublication,
                "yearOfPublication": this.state.yearOfPublication,
                "numberOfPages": this.state.numberOfPages,
                "workName": this.state.jobName,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                },
                {
                    'firstName': this.state.firstName3,
                    'lastName': this.state.lastName3,
                    'fathersName': this.state.surname3
                }]
            }
            Server.dissertationSourceWithHistory(DissertationSource3, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    yearOfPublication: '',
                    scientificDegreeName:'',
                    scientificDegreeSpecialty:'',
                    specialtyCode:'',
                    placeOfPublication:'',
                    numberOfPages:'',
                    jobName: '',

                    firstName1: '',
                    lastName1: '',
                    surname1: '',
                    firstName2: '',
                    lastName2: '',
                    surname2: '',
                    firstName3: '',
                    lastName3: '',
                    surname3: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendDissertationRequest4(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
            this.state.firstName1 !== ''&& !isNaN(this.state.specialtyCode) && this.state.firstName2 !== ''
            && this.state.firstName3 !== '' && this.state.firstName4 !== '') {
            this.setState({
                loading: true
            });
            const DissertationSource4 = {
                "scientificDegreeName": this.state.scientificDegreeName,
                "scientificDegreeSpecialty": this.state.scientificDegreeSpecialty,
                "specialtyCode": this.state.specialtyCode,
                "placeOfPublication": this.state.placeOfPublication,
                "yearOfPublication": this.state.yearOfPublication,
                "numberOfPages": this.state.numberOfPages,
                "workName": this.state.jobName,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                },
                {
                    'firstName': this.state.firstName3,
                    'lastName': this.state.lastName3,
                    'fathersName': this.state.surname3
                },
                {
                    'firstName': this.state.firstName4,
                    'lastName': this.state.lastName4,
                    'fathersName': this.state.surname4
                }]
            }
            Server.dissertationSourceWithHistory(DissertationSource4, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    yearOfPublication: '',
                    scientificDegreeName:'',
                    scientificDegreeSpecialty:'',
                    specialtyCode:'',
                    placeOfPublication:'',
                    numberOfPages:'',
                    jobName: '',

                    firstName1: '',
                    lastName1: '',
                    surname1: '',
                    firstName2: '',
                    lastName2: '',
                    surname2: '',
                    firstName3: '',
                    lastName3: '',
                    surname3: '',
                    firstName4: '',
                    lastName4: '',
                    surname4: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendAbstractDissertationRequest0(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
             !isNaN(this.state.specialtyCode)) {
            this.setState({
                loading: true
            });
            const AbstractDissertationSource0 = {
                "scientificDegreeName": this.state.scientificDegreeName,
                "scientificDegreeSpecialty": this.state.scientificDegreeSpecialty,
                "specialtyCode": this.state.specialtyCode,
                "placeOfPublication": this.state.placeOfPublication,
                "yearOfPublication": this.state.yearOfPublication,
                "numberOfPages": this.state.numberOfPages,
                "workName": this.state.jobName,
                "specialtyName": this.state.specialtyName
            }
            Server.abstractDissertationSourceWithHistory(AbstractDissertationSource0, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    yearOfPublication: '',
                    scientificDegreeName:'',
                    scientificDegreeSpecialty:'',
                    specialtyCode:'',
                    placeOfPublication:'',
                    numberOfPages:'',
                    jobName: '',
                    specialtyName:''

                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendAbstractDissertationRequest1(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
            this.state.firstName1 !== ''&& !isNaN(this.state.specialtyCode)) {
            this.setState({
                loading: true
            });
            const AbstractDissertationSource1 = {
                "scientificDegreeName": this.state.scientificDegreeName,
                "scientificDegreeSpecialty": this.state.scientificDegreeSpecialty,
                "specialtyCode": this.state.specialtyCode,
                "placeOfPublication": this.state.placeOfPublication,
                "yearOfPublication": this.state.yearOfPublication,
                "numberOfPages": this.state.numberOfPages,
                "workName": this.state.jobName,
                "specialtyName": this.state.specialtyName,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                }]
            }
            Server.abstractDissertationSourceWithHistory(AbstractDissertationSource1, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    yearOfPublication: '',
                    scientificDegreeName:'',
                    scientificDegreeSpecialty:'',
                    specialtyCode:'',
                    placeOfPublication:'',
                    numberOfPages:'',
                    jobName: '',
                    specialtyName:'',

                    firstName1: '',
                    lastName1: '',
                    surname1: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendAbstractDissertationRequest2(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
            this.state.firstName1 !== ''&& !isNaN(this.state.specialtyCode) && this.state.firstName2 !== '') {
            this.setState({
                loading: true
            });
            const AbstractDissertationSource2 = {
                "scientificDegreeName": this.state.scientificDegreeName,
                "scientificDegreeSpecialty": this.state.scientificDegreeSpecialty,
                "specialtyCode": this.state.specialtyCode,
                "placeOfPublication": this.state.placeOfPublication,
                "yearOfPublication": this.state.yearOfPublication,
                "numberOfPages": this.state.numberOfPages,
                "workName": this.state.jobName,
                "specialtyName": this.state.specialtyName,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                }]
            }
            Server.abstractDissertationSourceWithHistory(AbstractDissertationSource2, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    yearOfPublication: '',
                    scientificDegreeName:'',
                    scientificDegreeSpecialty:'',
                    specialtyCode:'',
                    placeOfPublication:'',
                    numberOfPages:'',
                    jobName: '',
                    specialtyName:'',

                    firstName1: '',
                    lastName1: '',
                    surname1: '',
                    firstName2: '',
                    lastName2: '',
                    surname2: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendAbstractDissertationRequest3(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
            this.state.firstName1 !== ''&& !isNaN(this.state.specialtyCode) && this.state.firstName2 !== ''
            && this.state.firstName3 !== '') {
            this.setState({
                loading: true
            });
            const AbstractDissertationSource3 = {
                "scientificDegreeName": this.state.scientificDegreeName,
                "scientificDegreeSpecialty": this.state.scientificDegreeSpecialty,
                "specialtyCode": this.state.specialtyCode,
                "placeOfPublication": this.state.placeOfPublication,
                "yearOfPublication": this.state.yearOfPublication,
                "numberOfPages": this.state.numberOfPages,
                "workName": this.state.jobName,
                "specialtyName": this.state.specialtyName,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                },
                {
                    'firstName': this.state.firstName3,
                    'lastName': this.state.lastName3,
                    'fathersName': this.state.surname3
                }]
            }
            Server.abstractDissertationSourceWithHistory(AbstractDissertationSource3, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    yearOfPublication: '',
                    scientificDegreeName:'',
                    scientificDegreeSpecialty:'',
                    specialtyCode:'',
                    placeOfPublication:'',
                    numberOfPages:'',
                    jobName: '',
                    specialtyName:'',

                    firstName1: '',
                    lastName1: '',
                    surname1: '',
                    firstName2: '',
                    lastName2: '',
                    surname2: '',
                    firstName3: '',
                    lastName3: '',
                    surname3: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendAbstractDissertationRequest4(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && !isNaN(this.state.yearOfPublication) &&
            !isNaN(this.state.periodicSelectionNumber) &&
            this.state.firstName1 !== ''&& !isNaN(this.state.specialtyCode) && this.state.firstName2 !== ''
            && this.state.firstName3 !== '' && this.state.firstName4 !== '') {
            this.setState({
                loading: true
            });
            const AbstractDissertationSource4 = {
                "scientificDegreeName": this.state.scientificDegreeName,
                "scientificDegreeSpecialty": this.state.scientificDegreeSpecialty,
                "specialtyCode": this.state.specialtyCode,
                "placeOfPublication": this.state.placeOfPublication,
                "yearOfPublication": this.state.yearOfPublication,
                "numberOfPages": this.state.numberOfPages,
                "workName": this.state.jobName,
                "specialtyName": this.state.specialtyName,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                },
                {
                    'firstName': this.state.firstName3,
                    'lastName': this.state.lastName3,
                    'fathersName': this.state.surname3
                },
                {
                    'firstName': this.state.firstName4,
                    'lastName': this.state.lastName4,
                    'fathersName': this.state.surname4
                }]
            }
            Server.abstractDissertationSourceWithHistory(AbstractDissertationSource4, localStorage.getItem('email')).then(res => {
                this.setState({
                    data: res,
                    loading: false,

                    yearOfPublication: '',
                    scientificDegreeName:'',
                    scientificDegreeSpecialty:'',
                    specialtyCode:'',
                    placeOfPublication:'',
                    numberOfPages:'',
                    jobName: '',
                    specialtyName:'',

                    firstName1: '',
                    lastName1: '',
                    surname1: '',
                    firstName2: '',
                    lastName2: '',
                    surname2: '',
                    firstName3: '',
                    lastName3: '',
                    surname3: '',
                    firstName4: '',
                    lastName4: '',
                    surname4: ''
                });
            });
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    render() {
        return (
            <div>
                <HeaderForAuth />
                <div className='main-div'>
                    <Tab.Container id="left-tabs" defaultActiveKey="second">
                        <Row className="noMargin">
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column" >
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Книга</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Електронне джерело</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Частина книги</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">Дисертація</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth">Автореферат дисертації</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth">Періодичне видання</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content >
                                    <Tab.Pane eventKey="first">
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Назва роботи</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder="Обов'язкове поле"
                                                value={this.state.jobName}
                                                onChange={this.getJobName}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Рік видання</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Число'
                                                value={this.state.yearOfPublication}
                                                onChange={this.getYearOfPublication}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Місто видання</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                value={this.state.placeOfPublication}
                                                onChange={this.getPlaceOfPublication}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Видавництво</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                value={this.state.publication}
                                                onChange={this.getPublication}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Кількість сторінок</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Число'
                                                value={this.state.numberOfPages}
                                                onChange={this.getNumberOfPages}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Видання</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Назва видання, яке опублікувало роботу'
                                                value={this.state.publishingName}
                                                onChange={this.getPublishingName}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Серія</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                value={this.state.series}
                                                onChange={this.getSeries}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Номер періодичного випуску</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Число'
                                                value={this.state.periodicSelectionNumber}
                                                onChange={this.getPeriodicSelectionNumber}
                                            />
                                        </InputGroup>
                                        <Form.Control
                                            as="select"
                                            className="select-div"
                                            id="inlineFormCustomSelect"
                                            value={this.state.publicationNumberType}
                                            onChange={this.getPublicationNumberType}
                                            custom
                                        >
                                            <option selected>Обов'язково виберіть тип видання...</option>
                                            <option value="0">Том</option>
                                            <option value="1">Випуск</option>
                                            <option value="2">Книга</option>
                                            <option value="3">№</option>
                                        </Form.Control>
                                        <Tabs defaultActiveKey="one" variant="pills">
                                            <Tab eventKey="none" title="Без автора">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' readOnly />
                                                    <FormControl placeholder="Ім'я" readOnly />
                                                    <FormControl placeholder='По батькові' readOnly />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendBookRequest0 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="one" title="1 автор">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendBookRequest1 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="two" title="2 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendBookRequest2 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="three" title="3 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendBookRequest3 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="four" title="4 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName4} onChange={this.getLastName4} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName4} onChange={this.getFirstName4} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname4} onChange={this.getFathersName4} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendBookRequest4 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="five" title="Від 5 авторів">
                                                <Form.Text className="text-muted author-tabs-div">
                                                    Якщо документ має більше, ніж 4 автори, у списку літератури зазначаються лише перші 3 автори
                                                </Form.Text>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendBookRequest3 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                        </Tabs>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Назва роботи</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder="Обов'язкове поле"
                                                value={this.state.jobName}
                                                onChange={this.getJobName}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Рік видання</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Число'
                                                value={this.state.yearOfPublication}
                                                onChange={this.getYearOfPublication}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Видання</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                value={this.state.publication}
                                                onChange={this.getPublication}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Посилання на джерело</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder="Обов'язкове поле"
                                                value={this.state.linkToSource}
                                                onChange={this.getLinkToSource}
                                            />
                                        </InputGroup>
                                        <Tabs defaultActiveKey="one" variant="pills">
                                            <Tab eventKey="none" title="Без автора">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' readOnly />
                                                    <FormControl placeholder="Ім'я" readOnly />
                                                    <FormControl placeholder='По батькові' readOnly />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendElectronicRequest0 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="one" title="1 автор">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendElectronicRequest1 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="two" title="2 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendElectronicRequest2 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="three" title="3 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendElectronicRequest3 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="four" title="4 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName4} onChange={this.getLastName4} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName4} onChange={this.getFirstName4} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname4} onChange={this.getFathersName4} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendElectronicRequest4 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="five" title="Від 5 авторів">
                                                <Form.Text className="text-muted author-tabs-div">
                                                    Якщо документ має більше, ніж 4 автори, у списку літератури зазначаються лише перші 3 автори
                                                </Form.Text>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendElectronicRequest3 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                        </Tabs>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                    <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Назва роботи</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder="Обов'язкове поле"
                                                value={this.state.jobName}
                                                onChange={this.getJobName}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Рік видання</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Число'
                                                value={this.state.yearOfPublication}
                                                onChange={this.getYearOfPublication}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Місто видання</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                value={this.state.placeOfPublication}
                                                onChange={this.getPlaceOfPublication}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Видавництво</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                value={this.state.publication}
                                                onChange={this.getPublication}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Сторінки</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='14-28'
                                                value={this.state.numberOfPages}
                                                onChange={this.getNumberOfPages}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Видання</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Назва видання, яке опублікувало роботу'
                                                value={this.state.publishingName}
                                                onChange={this.getPublishingName}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Серія</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                value={this.state.series}
                                                onChange={this.getSeries}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Номер періодичного випуску</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Число'
                                                value={this.state.periodicSelectionNumber}
                                                onChange={this.getPeriodicSelectionNumber}
                                            />
                                        </InputGroup>
                                        <Form.Control
                                            as="select"
                                            className="select-div"
                                            id="inlineFormCustomSelect"
                                            value={this.state.publicationNumberType}
                                            onChange={this.getPublicationNumberType}
                                            custom
                                        >
                                            <option selected>Обов'язково виберіть тип видання...</option>
                                            <option value="0">Том</option>
                                            <option value="1">Випуск</option>
                                            <option value="2">Книга</option>
                                            <option value="3">№</option>
                                        </Form.Control>
                                        <Tabs defaultActiveKey="one" variant="pills">
                                            <Tab eventKey="none" title="Без автора">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' readOnly />
                                                    <FormControl placeholder="Ім'я" readOnly />
                                                    <FormControl placeholder='По батькові' readOnly />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendBookRequest0 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="one" title="1 автор">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendBookRequest1 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="two" title="2 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendBookRequest2 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="three" title="3 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendBookRequest3 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="four" title="4 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName4} onChange={this.getLastName4} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName4} onChange={this.getFirstName4} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname4} onChange={this.getFathersName4} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendBookRequest4 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="five" title="Від 5 авторів">
                                                <Form.Text className="text-muted author-tabs-div">
                                                    Якщо документ має більше, ніж 4 автори, у списку літератури зазначаються лише перші 3 автори
                                                </Form.Text>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendBookRequest3 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                        </Tabs>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                    <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Назва роботи</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder="Обов'язкове поле"
                                                value={this.state.jobName}
                                                onChange={this.getJobName}
                                            />
                                        </InputGroup>
                                        <Form.Control
                                            as="select"
                                            className="select-div"
                                            id="inlineFormCustomSelect"
                                            value={this.state.scientificDegreeName}
                                            onChange={this.getScientificDegreeName}
                                            custom
                                        >
                                            <option selected>Виберіть наукову ступінь</option>
                                            <option value="Кандидат">Кандидат</option>
                                            <option value="Доктор">Доктор</option>
                                        </Form.Control>
                                        <Form.Control
                                            as="select"
                                            className="select-div"
                                            id="inlineFormCustomSelect"
                                            value={this.state.scientificDegreeSpecialty}
                                            onChange={this.getScientificDegreeSpecialty}
                                            custom
                                        >
                                            <option selected>Виберіть спеціальність наукової ступеніь</option>
                                            <option value="архітектурних наук">архітектурних наук</option>
                                            <option value="біологічних наук">біологічних наук</option>
                                            <option value="ветеринарних наук">ветеринарних наук</option>
                                            <option value="військових наук">військових наук</option>
                                            <option value="географічних наук">географічних наук</option>
                                            <option value="геолого-мінералогічних наук">геолого-мінералогічних наук</option>
                                            <option value="економічних наук">економічних наук</option>
                                            <option value="історичних  наук">історичних  наук</option>
                                            <option value="культурології">культурології</option>
                                            <option value="медичних наук">медичних наук</option>
                                            <option value="мистецтвознавства">мистецтвознавства</option>
                                            <option value="наук з державного управління">наук з державного управління</option>
                                            <option value="педагогічних наук">педагогічних наук</option>
                                            <option value="політичних наук">політичних наук</option>
                                            <option value="психологічних наук">психологічних наук</option>
                                            <option value="сільськогосподарських наук">сільськогосподарських наук</option>
                                            <option value="наук з соціальних комунікацій">наук з соціальних комунікацій</option>
                                            <option value="соціологічних наук">соціологічних наук</option>
                                            <option value="технічних наук">технічних наук</option>
                                            <option value="фармацевтичних наук">фармацевтичних наук</option>
                                            <option value="фізико-математичних наук">фізико-математичних наук</option>
                                            <option value="наук з фізичного виховання і спорту">наук з фізичного виховання і спорту</option>
                                            <option value="філологічних наук">філологічних наук</option>
                                            <option value="філософських наук">філософських наук</option>
                                            <option value="хімічних наук">хімічних наук</option>
                                            <option value="юридичних наук">юридичних наук</option>
                                        </Form.Control>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Шифр спеціальності</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Число'
                                                value={this.state.specialtyCode}
                                                onChange={this.getSpecialtyCode}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Рік видання</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Число'
                                                value={this.state.yearOfPublication}
                                                onChange={this.getYearOfPublication}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Місто видання</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                value={this.state.placeOfPublication}
                                                onChange={this.getPlaceOfPublication}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Кількість сторінок</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Число'
                                                value={this.state.numberOfPages}
                                                onChange={this.getNumberOfPages}
                                            />
                                        </InputGroup>
                                        <Tabs defaultActiveKey="one" variant="pills">
                                            <Tab eventKey="none" title="Без автора">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' readOnly />
                                                    <FormControl placeholder="Ім'я" readOnly />
                                                    <FormControl placeholder='По батькові' readOnly />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendDissertationRequest0 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="one" title="1 автор">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendDissertationRequest1 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="two" title="2 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendDissertationRequest2 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="three" title="3 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendDissertationRequest3 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="four" title="4 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName4} onChange={this.getLastName4} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName4} onChange={this.getFirstName4} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname4} onChange={this.getFathersName4} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendDissertationRequest4 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="five" title="Від 5 авторів">
                                                <Form.Text className="text-muted author-tabs-div">
                                                    Якщо документ має більше, ніж 4 автори, у списку літератури зазначаються лише перші 3 автори
                                                </Form.Text>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendDissertationRequest3 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                        </Tabs>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                    <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Назва роботи</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder="Обов'язкове поле"
                                                value={this.state.jobName}
                                                onChange={this.getJobName}
                                            />
                                        </InputGroup>
                                        <Form.Control
                                            as="select"
                                            className="select-div"
                                            id="inlineFormCustomSelect"
                                            value={this.state.scientificDegreeName}
                                            onChange={this.getScientificDegreeName}
                                            custom
                                        >
                                            <option selected>Виберіть наукову ступінь</option>
                                            <option value="Кандидат">Кандидат</option>
                                            <option value="Доктор">Доктор</option>
                                        </Form.Control>
                                        <Form.Control
                                            as="select"
                                            className="select-div"
                                            id="inlineFormCustomSelect"
                                            value={this.state.scientificDegreeSpecialty}
                                            onChange={this.getScientificDegreeSpecialty}
                                            custom
                                        >
                                            <option selected>Виберіть спеціальність наукової ступеніь</option>
                                            <option value="архітектурних наук">архітектурних наук</option>
                                            <option value="біологічних наук">біологічних наук</option>
                                            <option value="ветеринарних наук">ветеринарних наук</option>
                                            <option value="військових наук">військових наук</option>
                                            <option value="географічних наук">географічних наук</option>
                                            <option value="геолого-мінералогічних наук">геолого-мінералогічних наук</option>
                                            <option value="економічних наук">економічних наук</option>
                                            <option value="історичних  наук">історичних  наук</option>
                                            <option value="культурології">культурології</option>
                                            <option value="медичних наук">медичних наук</option>
                                            <option value="мистецтвознавства">мистецтвознавства</option>
                                            <option value="наук з державного управління">наук з державного управління</option>
                                            <option value="педагогічних наук">педагогічних наук</option>
                                            <option value="політичних наук">політичних наук</option>
                                            <option value="психологічних наук">психологічних наук</option>
                                            <option value="сільськогосподарських наук">сільськогосподарських наук</option>
                                            <option value="наук з соціальних комунікацій">наук з соціальних комунікацій</option>
                                            <option value="соціологічних наук">соціологічних наук</option>
                                            <option value="технічних наук">технічних наук</option>
                                            <option value="фармацевтичних наук">фармацевтичних наук</option>
                                            <option value="фізико-математичних наук">фізико-математичних наук</option>
                                            <option value="наук з фізичного виховання і спорту">наук з фізичного виховання і спорту</option>
                                            <option value="філологічних наук">філологічних наук</option>
                                            <option value="філософських наук">філософських наук</option>
                                            <option value="хімічних наук">хімічних наук</option>
                                            <option value="юридичних наук">юридичних наук</option>
                                        </Form.Control>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Шифр спеціальності</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Число'
                                                value={this.state.specialtyCode}
                                                onChange={this.getSpecialtyCode}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Назва спеціальності</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                value={this.state.specialtyName}
                                                onChange={this.getSpecialtyName}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Рік видання</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Число'
                                                value={this.state.yearOfPublication}
                                                onChange={this.getYearOfPublication}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Місто видання</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                value={this.state.placeOfPublication}
                                                onChange={this.getPlaceOfPublication}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Кількість сторінок</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Число'
                                                value={this.state.numberOfPages}
                                                onChange={this.getNumberOfPages}
                                            />
                                        </InputGroup>
                                        <Tabs defaultActiveKey="one" variant="pills">
                                            <Tab eventKey="none" title="Без автора">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' readOnly />
                                                    <FormControl placeholder="Ім'я" readOnly />
                                                    <FormControl placeholder='По батькові' readOnly />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendAbstractDissertationRequest0 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="one" title="1 автор">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendAbstractDissertationRequest1 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="two" title="2 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendAbstractDissertationRequest2 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="three" title="3 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendAbstractDissertationRequest3 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="four" title="4 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName4} onChange={this.getLastName4} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName4} onChange={this.getFirstName4} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname4} onChange={this.getFathersName4} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendAbstractDissertationRequest4 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="five" title="Від 5 авторів">
                                                <Form.Text className="text-muted author-tabs-div">
                                                    Якщо документ має більше, ніж 4 автори, у списку літератури зазначаються лише перші 3 автори
                                                </Form.Text>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendAbstractDissertationRequest3 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                        </Tabs>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Назва роботи</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder="Обов'язкове поле"
                                                value={this.state.jobName}
                                                onChange={this.getJobName}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Рік видання</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Число'
                                                value={this.state.yearOfPublication}
                                                onChange={this.getYearOfPublication}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Сторінки</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                value={this.state.numberOfPages}
                                                onChange={this.getNumberOfPages}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Видання</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Назва видання, яке опублікувало роботу'
                                                value={this.state.publishingName}
                                                onChange={this.getPublishingName}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Номер періодичного випуску</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                                placeholder='Число'
                                                value={this.state.periodicSelectionNumber}
                                                onChange={this.getPeriodicSelectionNumber}
                                            />
                                        </InputGroup>
                                        <Tabs defaultActiveKey="one" variant="pills">
                                            <Tab eventKey="none" title="Без автора">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' readOnly />
                                                    <FormControl placeholder="Ім'я" readOnly />
                                                    <FormControl placeholder='По батькові' readOnly />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendPeriodicalRequest0 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="one" title="1 автор">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendPeriodicalRequest1 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="two" title="2 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendPeriodicalRequest2 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="three" title="3 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendPeriodicalRequest3 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="four" title="4 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName4} onChange={this.getLastName4} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName4} onChange={this.getFirstName4} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname4} onChange={this.getFathersName4} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendPeriodicalRequest4 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="five" title="Від 5 авторів">
                                                <Form.Text className="text-muted author-tabs-div">
                                                    Якщо документ має більше, ніж 4 автори, у списку літератури зазначаються лише перші 3 автори
                                                </Form.Text>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendPeriodicalRequest3 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                        </Tabs>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
                <Card className="card-div">
                    <Card.Body>{this.state.data}</Card.Body>
                </Card>
            </div>
        );
    }
};