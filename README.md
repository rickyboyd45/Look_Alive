# Look Alive
https://quizzical-lamarr-3682ac.netlify.app/

# Project Description
With Look Alive I will be pulling the information for musical events in Atlanta based on the Ticketmaster API from late October 2021 and early November 2021. On the home page I will allow the users to add comments and rate their experience at the events, as well.

# Wireframes
https://whimsical.com/project-2-ViDYEhYBL6Dc9Quui9JS5q

# Component Hierarchy
https://drive.google.com/file/d/1l_h6zzPDh1fLfBszzZufOB29c6evUd93/view?usp=sharing

# API and Data Sample
https://airtable.com/app2HujIdBEExdRd1/tbljgQxTwHJ4wA92o/viwpANtFsZ6ETL2Fb?blocks=hide

```{
    "records": [
        {
            "id": "recNVipaPG8kS4CHr",
            "fields": {
                "Calculation": "recNVipaPG8kS4CHr",
                "title": "TEST",
                "text": "I'm looking forward to a good time!"
            },
            "createdTime": "2021-10-22T00:10:18.000Z"
        }
    ],
    "offset": "itrDv2EMo088BTJf6/recNVipaPG8kS4CHr"
}
```

https://api.airtable.com/v0/app2HujIdBEExdRd1/Events?api_key=keymcQ6E3LYsrFEc7

```{
"records": [
        {
            "id": "rec3kDDr5UqQFtwq5",
            "fields": {
                "Date": "2021-10-30",
                "Event": "Rakim & DJ Jazzy Jeff",
                "Venue": "Buckhead Theatre",
                "Link": "https://www.ticketsmarter.com/4795966/rakim-and-dj-jazzy-jeff",
                "ImageUrl": [
                    {
                        "id": "attjytLbfMQ60JQGt",
                        "width": 1024,
                        "height": 683,
                        "url": "https://dl.airtable.com/.attachments/ae33273653b0d220129f6043e062c523/ff03d5a5/1b1ef98f-a7e1-4b1a-8cfa-6b21f8bc0ff3_646611_TABLET_LANDSCAPE_3_2.jpg",
```
# MVP
* Utilize React Router, installed via NPM
* Have at least 6 separate, rendered components
* Implement an organized and understandable React file structure
* Utilize functional components appropriately
* Use Axios to consume data from Airtable, and GET/render that data in your components
* Use Axios to POST/create new data on Airtable

# Post-MVP
* Apply live animation to app
* Use local storage to save user favorites
* Add another API
* Style using Material-UI

# Project Schedule

|  Day        |     Deliverable               |    Status   |
| ----------- |-------------------------------| :----------:|
|Oct. 21-22   | Wireframes/ Timeframes/ README|  Completed  |
|Oct. 22      | Project Approval              |  Completed  |
|Oct. 25      | Core Application Structure    |  Completed  |
|Oct. 26      | Pseudocode / actual code      |  Completed  |
|Oct. 27      | Initial Clickable Model       |  Completed  |
|Oct. 28      | MVP                           |  Completed  |
|Oct. 29      | Project Presentations         |             |

# Timeframes

| Component      | Priority | Estimated Time | Time Invested  |
| ---------------|:------- :| :-------------:|:--------------:|
|Proposal        | H        | 4 hrs          | 4 hrs          |
|Pseudocode      | H        | 4 hrs          | 4 hrs          |
|Airtable Setup  | H        | 4 hrs          | 4 hrs          |
|Displaying Data | H        | 2 hrs          | 6 hrs          |
|Create Form     | H        | 2 hrs          | 4 hrs          |
|Create Navbar   | H        | 2 hrs          | 2 hrs          |
|Application CSS | H        | 4 hrs          | 6 hrs          |
|Linting         | H        | 2 hrs          | 2 hrs          |
|Total           | H        | 24 hrs         | 32 hrs         |

# SWOT Analysis

Strengths: My strength was having the idea mapped out and staying true to the path.


Weakness: My weaknesses through this project was in CSS and getting the components to render where I wanted them to.


Oppurtunities: My weakness in CSS was also an opportunity for me to get better at CSS and bootstrap through research.


Threats: Moving forward the main threats I see is keeping everything together and finding a better way to get started up.

References:

* https://w3collective.com/airtable-api-react/

* Adrian Twarog-https://www.youtube.com/watch?v=8pKjULHzs0s

* Masteryst-https://www.youtube.com/watch?v=-HEjsVkfjOk

* https://react-bootstrap.github.io/components/cards/
