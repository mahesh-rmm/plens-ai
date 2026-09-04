// ============================================
// ProjectLens - Utility Functions
// ============================================

/**
 * Get badge CSS class based on alignment score
 * @param {number} score - Alignment score (0-100)
 * @returns {string} CSS class name for badge styling
 */
function getScoreBadgeClass(score) {
  if (score < 50) return "badge-danger";
  if (score < 75) return "badge-warning";
  return "badge-success";
}

/**
 * Get readable text for alignment score
 * @param {number} score - Alignment score (0-100)
 * @returns {string} Human-readable text
 */
function getScoreLabel(score) {
  if (score < 50) return "Low Alignment";
  if (score < 75) return "Medium Alignment";
  return "High Alignment";
}

/**
 * Format date to readable format
 * @param {string|Date} dateInput - Date string or Date object
 * @returns {string} Formatted date string
 */
function formatDate(dateInput) {
  const date = new Date(dateInput);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return date.toLocaleDateString('en-US', options);
}

/**
 * Check if submission deadline has passed
 * @param {string|Date} deadline - Deadline date
 * @returns {boolean} True if deadline has passed
 */
function isDeadlinePassed(deadline) {
  return new Date(deadline) < new Date();
}

/**
 * Get badge class for decision status
 * @param {string} status - Decision status (APPROVED, NEEDS_REVISION, REJECTED, or null)
 * @returns {string} CSS class name for badge styling
 */
function getDecisionBadgeClass(status) {
  if (!status) return "badge-info";
  if (status === "APPROVED") return "badge-success";
  if (status === "NEEDS_REVISION") return "badge-warning";
  if (status === "REJECTED") return "badge-danger";
  return "badge-info";
}

/**
 * Get readable text for decision status
 * @param {string} status - Decision status
 * @returns {string} Human-readable text
 */
function getDecisionLabel(status) {
  if (!status) return "Pending Review";
  return status.replace(/_/g, " ");
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate URL format
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid URL format
 */
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Show error message in form field
 * @param {string} fieldId - ID of form field
 * @param {string} message - Error message to display
 */
function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorElement = document.getElementById(`${fieldId}-error`);
  
  if (field) {
    field.classList.add('is-invalid');
  }
  
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
  }
}

/**
 * Clear error message from form field
 * @param {string} fieldId - ID of form field
 */
function clearFieldError(fieldId) {
  const field = document.getElementById(fieldId);
  const errorElement = document.getElementById(`${fieldId}-error`);
  
  if (field) {
    field.classList.remove('is-invalid');
  }
  
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.classList.remove('show');
  }
}

/**
 * Show alert message
 * @param {string} message - Alert message
 * @param {string} type - Alert type (success, error, info)
 * @param {string} containerId - ID of alert container
 * @param {number} autoHide - Auto-hide after milliseconds (0 = no auto-hide)
 */
function showAlert(message, type = 'info', containerId = 'alert-container', autoHide = 5000) {
  const container = document.getElementById(containerId);
  
  if (!container) {
    console.warn(`Alert container with ID '${containerId}' not found`);
    return;
  }
  
  const alert = document.createElement('div');
  alert.className = `alert alert-${type} show`;
  alert.textContent = message;
  
  container.innerHTML = '';
  container.appendChild(alert);
  
  if (autoHide > 0) {
    setTimeout(() => {
      alert.classList.remove('show');
      setTimeout(() => alert.remove(), 300);
    }, autoHide);
  }
}

/**
 * Parse comma-separated string into array
 * @param {string} str - Comma-separated string
 * @returns {string[]} Array of trimmed strings
 */
function parseCommaSeparated(str) {
  if (!str) return [];
  return str.split(',').map(item => item.trim()).filter(item => item.length > 0);
}

/**
 * Convert array to comma-separated string
 * @param {string[]} arr - Array of strings
 * @returns {string} Comma-separated string
 */
function toCommaSeparated(arr) {
  if (!Array.isArray(arr)) return '';
  return arr.join(', ');
}

/**
 * Get current logged-in user
 * @returns {object|null} User object or null if not logged in
 */
function getCurrentUser() {
  const userJson = sessionStorage.getItem('currentUser');
  return userJson ? JSON.parse(userJson) : null;
}

/**
 * Set current logged-in user
 * @param {object} user - User object
 */
function setCurrentUser(user) {
  sessionStorage.setItem('currentUser', JSON.stringify(user));
}

/**
 * Clear current logged-in user
 */
function clearCurrentUser() {
  sessionStorage.removeItem('currentUser');
}

/**
 * Check if user has a specific role
 * @param {string} role - Role to check (TRAINER, POD_LEAD, POD_MEMBER)
 * @returns {boolean} True if user has the role
 */
function userHasRole(role) {
  const user = getCurrentUser();
  return user && user.role === role;
}

/**
 * Redirect to page if user doesn't have required role
 * @param {string} requiredRole - Required role
 * @param {string} redirectTo - URL to redirect to
 */
function requireRole(requiredRole, redirectTo = 'index.html') {
  if (!userHasRole(requiredRole)) {
    window.location.href = redirectTo;
  }
}
