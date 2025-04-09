pipeline {
  agent any

  stages {
    stage('Pull from GitHub') {
      steps {
        git branch: 'main',
            url: 'git@github.com:farukulwd/tradeasiahrc.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker compose down'
        sh 'docker compose up -d --build'
      }
    }
  }
}
