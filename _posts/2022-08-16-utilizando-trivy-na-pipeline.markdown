---
layout: post
title: "Utilizando trivy na pipeline"
date: 2022-08-16 00:00:00 +0000
categories: article
---

Uma visão do que é o trivy e de como ele funciona.
Percausos na sua implementação em pipelines e uma breve opinião na sua utilização.

## O que é trivy? Qual a sua proposta

## O que o trivy olha?

- Target
  - Container Image
  - Filesystem
  - Git repository (remote)
  - Kubernetes cluster or resource

- Scanners
  - OS packages and software dependencies in use (SBOM)
  - Known vulnerabilities (CVEs)
  - IaC misconfigurations
  - Sensitive information and secrets

## Como sua pipeline pode interagir com o trivy

## Exceções acontecem

## Como gerir essas exceções

## Obrigado

## Links de referencia

- [Github do trivy - aquasecurity/trivy](https://github.com/aquasecurity/trivy){:target="_blank"}
