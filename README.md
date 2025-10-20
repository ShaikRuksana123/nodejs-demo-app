# Node.js Demo App

A small sample Node.js app used to automate a CI/CD pipeline with GitHub Actions and Docker. 

## Project structure

- `app.js` - Express application entrypoint
- `tests/test.js` - Simple assertion tests
- `Dockerfile` - Dockerfile to build app image
- `.github/workflows/cid.yml` - GitHub Actions workflow for CI/CD
- `package.json` - Node.js package metadata

## Requirements

- Node.js 18+ (tested with v18)
- npm
- Docker (for building the image)

## Local Setup

1. Install dependencies 

```bash
npm install
```

2. Run the app:

```bash
node app.js
```
## To Access the application 
Open http://localhost:3000 in your browser. Example endpoints:

- `/` — returns a welcome message
- `/add?a=2&b=3` — returns a sum

## Docker

To Build the Docker image:

```bash
docker build -t your-username/nodejs-cicd-app:latest .
```

To Run  container locally:

```bash
docker run -p 3000:3000 your-username/nodejs-cicd-app:latest
```

## Results
### Tests 
<img width="585" height="82" alt="image" src="https://github.com/user-attachments/assets/36df6975-22ea-485c-a483-c5b93219a0f5" />


### GitHub Actions CI/CD Workflow
<img width="1019" height="358" alt="image" src="https://github.com/user-attachments/assets/c1c24418-346a-455d-bc5d-d6157399af7e" />

<img width="701" height="576" alt="image" src="https://github.com/user-attachments/assets/8ca1fb28-9d1d-4e95-bb2b-d3bd4047fa32" />


# nodejs-demo-app
Automate Code Deployment Using CI/CD Pipeline (GitHub Actions)
