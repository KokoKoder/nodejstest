pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS 21.7.3') {
                    sh 'npm install'
                }
            }
        }
        stage('Test') { 
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS 21.7.3') {
                    sh 'cd ./cucumber-repo'
                    sh 'npm install'
                    sh 'npm run cucumber-test'
                }
            }
        }
    }
}