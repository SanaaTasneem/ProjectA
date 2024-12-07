export interface Joke {
  type: string; // 'single' or 'twopart'
  setup?: string; // For 'twopart' jokes
  delivery?: string; // For 'twopart' jokes
  joke?: string; // For 'single' jokes
}
