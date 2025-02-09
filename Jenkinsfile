pipeline{
agent any
environment {
  PATH = ""C:\\Program Files\\nodejs;${env.PATH}"
}
stages{
  stage('Installing dependencies'){
    steps{
      //installs the dependencies from package.json
      bat 'npm install'
    }
  }
  stage('Building'){
    steps{
      bat 'npm run build'
    }
  }
  stage('Deploy'){
    steps{
      // start the app in the background
      bat 'start /B npm start'
      // wait for the app to initialize
      bat 'ping 127.0.0.1 -n 10 > nul'
      // verify the app is running on port 3000
      bat 'curl http://localhost:3000 || echo "Application did not start successfully!"'
    }
  }
}
}
