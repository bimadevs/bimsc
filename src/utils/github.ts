export const downloadFromGithub = async (githubUrl: string) => {
  try {
    // Extract owner and repo from GitHub URL
    const [owner, repo] = githubUrl
      .replace('https://github.com/', '')
      .split('/');

    // Construct the download URL for the zip file
    const downloadUrl = `https://github.com/${owner}/${repo}/archive/refs/heads/main.zip`;
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${repo}.zip`;
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    return true;
  } catch (error) {
    console.error('Error downloading from GitHub:', error);
    return false;
  }
}; 