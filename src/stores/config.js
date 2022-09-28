import { writable } from 'svelte/store';

const store = writable({
  // saveDir: window.primo.config.getSavedDirectory(),
  // hosts: window.primo.config.getHosts()
  saveDir: '',
  hosts: '',
  customization: {
    color: 'blue',
    logo: {
      url: `data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDQyIDEwNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjcuMzkxNiAxOS45Njc0QzMwLjQyNzUgMTYuOTMxNCAzNS4zNDk3IDE2LjkzMTQgMzguMzg1NyAxOS45Njc0QzQxLjMyOTYgMjIuOTExMyA0MS40MTg4IDI3LjYyODkgMzguNjUzMyAzMC42ODA0TDM4LjM4NTcgMzAuOTYxNUwxOC43ODMyIDUwLjU2MTNMNTUuMTQ5NSA4Ni43MjQyQzU4LjEwMTcgODkuNjU5OCA1OC4yMDQzIDk0LjM3NzEgNTUuNDQ3NCA5Ny40MzY0TDU1LjE4MDYgOTcuNzE4MkM1Mi4yNDUgMTAwLjY3IDQ3LjUyNzYgMTAwLjc3MyA0NC40Njg0IDk4LjAxNjJMNDQuMTg2NSA5Ny43NDkzTDIuMjkyNTIgNTYuMDkxNkMtMC42NjU2MzYgNTMuMTUwMiAtMC43NjE4MzkgNDguNDIxMyAyLjAwODggNDUuMzYzN0wyLjI3Njk1IDQ1LjA4MkwyNy4zOTE2IDE5Ljk2NzRaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNzRfMikiPjwvcGF0aD48cGF0aCBkPSJNNzcuNzkyNyAxNS41MTEyQzk3LjE2MSAxNS41MTEyIDExMi44NjEgMzEuMjEyIDExMi44NjEgNTAuNTc5N0MxMTIuODYxIDY5Ljk0NzQgOTcuMTYxIDg1LjY0ODIgNzcuNzkyNyA4NS42NDgyQzczLjQ5OTIgODUuNjQ4MiA3MC4wMTg3IDgyLjE2NzYgNzAuMDE4NyA3Ny44NzQyQzcwLjAxODcgNzMuNTgwNyA3My40OTkyIDcwLjEwMDIgNzcuNzkyNyA3MC4xMDAyQzg4LjU3MzkgNzAuMTAwMiA5Ny4zMTMyIDYxLjM2MDYgOTcuMzEzMiA1MC41Nzk3Qzk3LjMxMzIgMzkuNzk4OCA4OC41NzM5IDMxLjA1OTIgNzcuNzkyNyAzMS4wNTkyQzY3LjE3MTMgMzEuMDU5MiA1OC41MzEyIDM5LjU0MzggNTguMjc3OSA1MC4yNTM5TDU4LjI3MjIgNTAuNzM0OUw1Ny40NDA0IDkyLjM5MjZDNTcuMzU0NyA5Ni42ODUyIDUzLjgwNTMgMTAwLjA5NiA0OS41MTI3IDEwMC4wMUM0NS4zMzMxIDk5LjkyNjQgNDEuOTg5OSA5Ni41NTkyIDQxLjg5NTUgOTIuNDE5NVY5Mi4wODIyTDQyLjcyNTggNTAuNTc5N0M0Mi43MjU4IDMxLjIxMjMgNTguNDI1NiAxNS41MTEyIDc3Ljc5MjcgMTUuNTExMloiIGZpbGw9IiMzNUQ5OTQiPjwvcGF0aD48cGF0aCBkPSJNMTE3LjIwMSAxOS45NjY3QzEyMC4xNDUgMTcuMDIyOSAxMjQuODYzIDE2LjkzMzggMTI3LjkxNCAxOS42OTk0TDEyOC4xOTUgMTkuOTY3MUwxNTMuMzEgNDUuMDgzM0MxNTYuMjU0IDQ4LjAyNzMgMTU2LjM0MyA1Mi43NDQ5IDE1My41NzcgNTUuNzk2M0wxNTMuMzEgNTYuMDc3M0wxMjguMTk1IDgxLjE5MDRDMTI1LjE1OSA4NC4yMjYzIDEyMC4yMzcgODQuMjI2MSAxMTcuMjAxIDgxLjE5MDFDMTE0LjI1NyA3OC4yNDYxIDExNC4xNjggNzMuNTI4NCAxMTYuOTM0IDcwLjQ3NzFMMTE3LjIwMSA3MC4xOTZMMTM2LjgxOSA1MC41Nzg0TDExNy4yMDEgMzAuOTYwOEMxMTQuMjU3IDI4LjAxNjggMTE0LjE2OCAyMy4yOTkxIDExNi45MzQgMjAuMjQ3OEwxMTcuMjAxIDE5Ljk2NjdaIiBmaWxsPSIjMzVEOTk0Ij48L3BhdGg+PHBhdGggZD0iTTE5My4yMDYgMTAzLjc2MUMxOTAuMTA0IDEwMy43NjEgMTg3LjU4NyAxMDEuMjQ0IDE4Ny41ODcgOTguMTQxN1Y0OS44MzUxQzE4Ny41ODcgMzQuNzA3IDE5OS45MDUgMjIuMzg4NyAyMTUuMDMzIDIyLjM4ODdDMjMwLjE2MSAyMi4zODg3IDI0Mi40OCAzNC43MDcgMjQyLjQ4IDQ5LjgzNTFDMjQyLjQ4IDY0Ljk2MzIgMjMwLjE2MSA3Ny4yODE2IDIxNS4wMzMgNzcuMjgxNkMyMTEuOTMxIDc3LjI4MTYgMjA5LjQxMyA3NC43NjM5IDIwOS40MTMgNzEuNjYxOUMyMDkuNDEzIDY4LjU1OTggMjExLjkzMSA2Ni4wNDIyIDIxNS4wMzMgNjYuMDQyMkMyMjMuOTU3IDY2LjA0MjIgMjMxLjI0IDU4Ljc4MTYgMjMxLjI0IDQ5LjgzNTFDMjMxLjI0IDQwLjg4ODYgMjIzLjk4IDMzLjYyOCAyMTUuMDMzIDMzLjYyOEMyMDYuMDg3IDMzLjYyOCAxOTguODI2IDQwLjg4ODYgMTk4LjgyNiA0OS44MzUxVjk4LjE0MTdDMTk4LjgyNiAxMDEuMjQ0IDE5Ni4zMDggMTAzLjc2MSAxOTMuMjA2IDEwMy43NjFaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPjxwYXRoIGQ9Ik0yNTUuNzY0IDc3LjI4MTZDMjUyLjY2MiA3Ny4yODE2IDI1MC4xNDUgNzQuNzYzOSAyNTAuMTQ1IDcxLjY2MTlWNDkuODM1MUMyNTAuMTQ1IDM0LjcwNyAyNjIuNDYzIDIyLjM4ODcgMjc3LjU5MSAyMi4zODg3QzI4MC42OTMgMjIuMzg4NyAyODMuMjExIDI0LjkwNjMgMjgzLjIxMSAyOC4wMDgzQzI4My4yMTEgMzEuMTEwNCAyODAuNjkzIDMzLjYyOCAyNzcuNTkxIDMzLjYyOEMyNjguNjY3IDMzLjYyOCAyNjEuMzg0IDQwLjg4ODYgMjYxLjM4NCA0OS44MzUxVjcxLjY2MTlDMjYxLjM4NCA3NC43NjM5IDI1OC44NjYgNzcuMjgxNiAyNTUuNzY0IDc3LjI4MTZaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPjxwYXRoIGQ9Ik00MTQuNTU0IDc3LjM0ODlDMzk5LjQyNSA3Ny4zNDg5IDM4Ny4xMDcgNjUuMDMwNiAzODcuMTA3IDQ5LjkwMjVDMzg3LjEwNyAzNC43NzQ0IDM5OS40MjUgMjIuNDU2MSA0MTQuNTU0IDIyLjQ1NjFDNDI5LjY4MiAyMi40NTYxIDQ0MiAzNC43NzQ0IDQ0MiA0OS45MDI1QzQ0MiA2NS4wMzA2IDQyOS42ODIgNzcuMzQ4OSA0MTQuNTU0IDc3LjM0ODlaTTQxNC41NTQgMzMuNjk1NEM0MDUuNjMgMzMuNjk1NCAzOTguMzQ3IDQwLjk1NiAzOTguMzQ3IDQ5LjkwMjVDMzk4LjM0NyA1OC44NDkgNDA1LjYwNyA2Ni4xMDk2IDQxNC41NTQgNjYuMTA5NkM0MjMuNSA2Ni4xMDk2IDQzMC43NjEgNTguODQ5IDQzMC43NjEgNDkuOTAyNUM0MzAuNzYxIDQwLjk1NiA0MjMuNSAzMy42OTU0IDQxNC41NTQgMzMuNjk1NFoiIGZpbGw9IndoaXRlIj48L3BhdGg+PHBhdGggZD0iTTI5Ny45MTIgNzcuMjgxNkMyOTQuODEgNzcuMjgxNiAyOTIuMjkyIDc0Ljc2MzkgMjkyLjI5MiA3MS42NjE5VjI4LjAwODNDMjkyLjI5MiAyNC45MDYzIDI5NC44MSAyMi4zODg3IDI5Ny45MTIgMjIuMzg4N0MzMDEuMDE0IDIyLjM4ODcgMzAzLjUzMiAyNC45MDYzIDMwMy41MzIgMjguMDA4M1Y3MS42NjE5QzMwMy41MzIgNzQuNzYzOSAzMDEuMDE0IDc3LjI4MTYgMjk3LjkxMiA3Ny4yODE2WiIgZmlsbD0id2hpdGUiPjwvcGF0aD48cGF0aCBkPSJNMjk3LjkxMiAxMS43MzM5QzMwMS4xNTIgMTEuNzMzOSAzMDMuNzc5IDkuMTA3MTQgMzAzLjc3OSA1Ljg2NjkzQzMwMy43NzkgMi42MjY3MSAzMDEuMTUyIDAgMjk3LjkxMiAwQzI5NC42NzIgMCAyOTIuMDQ1IDIuNjI2NzEgMjkyLjA0NSA1Ljg2NjkzQzI5Mi4wNDUgOS4xMDcxNCAyOTQuNjcyIDExLjczMzkgMjk3LjkxMiAxMS43MzM5WiIgZmlsbD0id2hpdGUiPjwvcGF0aD48cGF0aCBkPSJNMzYxLjAzMiAyMi40NTYxQzM1NS42MzcgMjIuNDU2MSAzNTAuNzgyIDI0LjY1OSAzNDcuMjUyIDI4LjIxMDZDMzQzLjc0NiAyNC42NTkgMzM4Ljg2OCAyMi40NTYxIDMzMy40NzMgMjIuNDU2MUMzMjIuNzczIDIyLjQ1NjEgMzE0LjA3NCAzMS4xNTUzIDMxNC4wNzQgNDEuODU1MVY3MS43MjkzQzMxNC4wNzQgNzQuODMxMyAzMTYuNTkyIDc3LjM0ODkgMzE5LjY5NCA3Ny4zNDg5QzMyMi43OTYgNzcuMzQ4OSAzMjUuMzEzIDc0LjgzMTMgMzI1LjMxMyA3MS43MjkzVjQxLjg1NTFDMzI1LjMxMyAzNy4zNTk0IDMyOC45NzcgMzMuNjk1NCAzMzMuNDczIDMzLjY5NTRDMzM3Ljk2OSAzMy42OTU0IDM0MS42MzMgMzcuMzU5NCAzNDEuNjMzIDQxLjg1NTFWNzEuNzI5M0MzNDEuNjMzIDc0LjgzMTMgMzQ0LjE1IDc3LjM0ODkgMzQ3LjI1MiA3Ny4zNDg5QzM1MC4zNTUgNzcuMzQ4OSAzNTIuODcyIDc0LjgzMTMgMzUyLjg3MiA3MS43MjkzVjQxLjg1NTFDMzUyLjg3MiAzNy4zNTk0IDM1Ni41MzYgMzMuNjk1NCAzNjEuMDMyIDMzLjY5NTRDMzY1LjUyOCAzMy42OTU0IDM2OS4xOTIgMzcuMzU5NCAzNjkuMTkyIDQxLjg1NTFWNzEuNzI5M0MzNjkuMTkyIDc0LjgzMTMgMzcxLjcwOSA3Ny4zNDg5IDM3NC44MTEgNzcuMzQ4OUMzNzcuOTEzIDc3LjM0ODkgMzgwLjQzMSA3NC44MzEzIDM4MC40MzEgNzEuNzI5M1Y0MS44NTUxQzM4MC40MzEgMzEuMTU1MyAzNzEuNzMyIDIyLjQ1NjEgMzYxLjAzMiAyMi40NTYxWiIgZmlsbD0id2hpdGUiPjwvcGF0aD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNzRfMiIgeDE9IjIyLjY4NCIgeTE9IjYyLjQyNyIgeDI9IjUyLjMwODYiIHkyPSI4OS41MDQxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzM1RDk5NCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzExMTExMSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==`,
      alt: 'Primo Logo'
    },
    links: [
      {
        url: 'https://discord.gg/vzSFTS9',
        label: 'Discord'
      },
      {
        url: 'https://primo.aso/terms-of-service',
        label: 'Terms'
      },
      {
        url: 'https://primo.so/privacy-policy',
        label: 'Privacy'
      },
    ],
    docs: {
      url: 'https://docs.primo.so/',
      label: 'Docs'
    },
    hide_version: false
  }
})

store.subscribe((c) => {
  // config.setHosts(c.hosts)
})

export default store