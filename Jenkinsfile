pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS 21.7.3', configId: '<config-file-provider-id>') {
                    sh 'npm install'
                }
            }
        }
        stage('Test') { 
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS 21.7.3', configId: '<config-file-provider-id>') {
                    sh 'npm run cucumber-test'
                }
            }
        }
    }
}