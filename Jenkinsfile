pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') { 
            steps {
                sh 'npm install'
                sh 'npm run sample-test'
                sh 'npm run cucumber-test'
            }
        }

    }
}