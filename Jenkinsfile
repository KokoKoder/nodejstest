pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'node -version'
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm run cucumber-test'
            }
        }
    }
}