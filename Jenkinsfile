pipeline {
    agent { docker { image '21.7.2' } }
    stages {
        stage('Build') {
            steps {
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