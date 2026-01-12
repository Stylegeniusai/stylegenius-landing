const SUPABASE_URL = 'https://imkvzudhshjgqkoywosw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlta3Z6dWRoc2hqZ3Frb3l3b3N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0MDc4NjMsImV4cCI6MjA1OTk4Mzg2M30.6reENx-5l7cRKCsYzh1fqkBIer8FT0SJPPyfevQixMs';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const termsBox = document.getElementById('termsBox');
const termsCheckbox = document.getElementById('termsCheckbox');

function validateTerms() {
  if (!termsCheckbox.checked) {
    termsBox.classList.add('error', 'shake');
    setTimeout(() => termsBox.classList.remove('shake'), 400);
    return false;
  }
  termsBox.classList.remove('error');
  return true;
}

// Clear error when checkbox is checked
termsCheckbox.addEventListener('change', function() {
  if (this.checked) {
    termsBox.classList.remove('error');
  }
});

// Google Sign Up
document.getElementById('googleSignupBtn').addEventListener('click', async function() {
  if (!validateTerms()) return;

  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'https://stylegenius.app/auth-callback'
    }
  });

  if (error) {
    console.error('Google signup error:', error);
    alert('Could not sign in with Google. Please try again.');
  }
});

// Apple Sign Up
document.getElementById('appleSignupBtn').addEventListener('click', async function() {
  if (!validateTerms()) return;

  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'apple',
    options: {
      redirectTo: 'https://stylegenius.app/auth-callback'
    }
  });

  if (error) {
    console.error('Apple signup error:', error);
    alert('Could not sign in with Apple. Please try again.');
  }
});

// Email Sign Up
document.getElementById('signupForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  if (!validateTerms()) return;

  const email = document.getElementById('signupEmailInput').value;
  const password = document.getElementById('signupPwInput').value;
  const confirmPw = document.getElementById('confirmPwInput').value;

  if (password !== confirmPw) {
    alert('Passwords do not match');
    return;
  }

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password
  });

  if (error) {
    console.error('Signup error:', error);
    alert(error.message);
    return;
  }

  // Success - redirect to Chrome store
  alert('Account created! Check your email to confirm.');
  window.location.href = 'https://chromewebstore.google.com/detail/stylegenius-virtual-try-o/bggndhefooccenjglglakcfgifgdpbmn';
});
