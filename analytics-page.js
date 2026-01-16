// Analytics Page JavaScript
// Read localStorage data and generate interactive charts

// Chart.js configuration
Chart.defaults.color = '#e0e0e0';
Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';

let dailyChart, hourlyChart, weeklyChart, pieChart;
let currentPeriod = 7;

// Get data from localStorage
function getStorageData(key, defaultValue) {
    const value = localStorage.getItem(key);
    return value !== null ? JSON.parse(value) : defaultValue;
}

function calculateLevel(xp) {
    return Math.floor(xp / 100) + 1;
}

// Generate sample session data (in real app, this would come from stored sessions)
function generateSessionData() {
    const sessions = getStorageData('studySessions', []);
    
    // If no sessions exist, generate sample data based on total stats
    if (sessions.length === 0) {
        const totalTime = getStorageData('totalStudyTime', 0);
        const sessionsCompleted = getStorageData('sessionsCompleted', 0);
        
        if (sessionsCompleted > 0) {
            // Generate sessions spread over last 30 days
            const sampleSessions = [];
            const now = new Date();
            
            for (let i = 0; i < Math.min(sessionsCompleted, 90); i++) {
                const daysAgo = Math.floor(Math.random() * 30);
                const date = new Date(now);
                date.setDate(date.getDate() - daysAgo);
                date.setHours(9 + Math.floor(Math.random() * 10), Math.floor(Math.random() * 60));
                
                sampleSessions.push({
                    timestamp: date.toISOString(),
                    duration: 25 + (Math.random() > 0.5 ? 5 : 0),
                    type: 'study',
                    completed: true
                });
            }
            
            return sampleSessions;
        }
    }
    
    return sessions;
}

// Filter sessions by period
function filterSessionsByPeriod(sessions, days) {
    if (days === 'all') return sessions;
    
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    return sessions.filter(s => new Date(s.timestamp) >= cutoffDate);
}

// Analyze daily study time
function analyzeDailyStudyTime(sessions) {
    const dailyData = {};
    
    sessions.forEach(session => {
        const date = new Date(session.timestamp).toISOString().split('T')[0];
        dailyData[date] = (dailyData[date] || 0) + session.duration;
    });
    
    return dailyData;
}

// Analyze hourly distribution
function analyzeHourlyDistribution(sessions) {
    const hourlyData = Array(24).fill(0);
    
    sessions.forEach(session => {
        const hour = new Date(session.timestamp).getHours();
        hourlyData[hour]++;
    });
    
    return hourlyData;
}

// Analyze weekly pattern
function analyzeWeeklyPattern(sessions) {
    const weeklyData = Array(7).fill(0);
    
    sessions.forEach(session => {
        const day = new Date(session.timestamp).getDay();
        weeklyData[day] += session.duration;
    });
    
    return weeklyData;
}

// Create daily chart
function createDailyChart(sessions) {
    const dailyData = analyzeDailyStudyTime(sessions);
    const sortedDates = Object.keys(dailyData).sort();
    const labels = sortedDates.map(d => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    const data = sortedDates.map(d => dailyData[d]);
    
    const ctx = document.getElementById('dailyChart').getContext('2d');
    
    if (dailyChart) dailyChart.destroy();
    
    dailyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Study Time (minutes)',
                data: data,
                borderColor: '#4ade80',
                backgroundColor: 'rgba(74, 222, 128, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointBackgroundColor: '#4ade80',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: { size: 14, weight: 'bold' },
                    bodyFont: { size: 13 },
                    borderColor: '#4ade80',
                    borderWidth: 1
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value + 'm';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Create hourly chart
function createHourlyChart(sessions) {
    const hourlyData = analyzeHourlyDistribution(sessions);
    const labels = Array.from({length: 24}, (_, i) => `${i}:00`);
    
    const ctx = document.getElementById('hourlyChart').getContext('2d');
    
    if (hourlyChart) hourlyChart.destroy();
    
    hourlyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Sessions',
                data: hourlyData,
                backgroundColor: 'rgba(135, 206, 235, 0.8)',
                borderColor: '#87CEEB',
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    borderColor: '#87CEEB',
                    borderWidth: 1
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        stepSize: 1
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Create weekly chart
function createWeeklyChart(sessions) {
    const weeklyData = analyzeWeeklyPattern(sessions);
    const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const ctx = document.getElementById('weeklyChart').getContext('2d');
    
    if (weeklyChart) weeklyChart.destroy();
    
    const maxValue = Math.max(...weeklyData);
    const colors = weeklyData.map(v => v === maxValue ? '#fbbf24' : 'rgba(251, 191, 36, 0.6)');
    
    weeklyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Study Time (minutes)',
                data: weeklyData,
                backgroundColor: colors,
                borderColor: '#fbbf24',
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    borderColor: '#fbbf24',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + ' minutes';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value + 'm';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Create pie chart
function createPieChart(sessions) {
    const studyTime = sessions.filter(s => s.type === 'study' || !s.type).reduce((sum, s) => sum + s.duration, 0);
    const breakTime = sessions.filter(s => s.type === 'break').reduce((sum, s) => sum + s.duration, 0);
    
    const ctx = document.getElementById('pieChart').getContext('2d');
    
    if (pieChart) pieChart.destroy();
    
    pieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Study Time', 'Break Time'],
            datasets: [{
                data: [studyTime, breakTime || studyTime * 0.2], // Estimate breaks if not tracked
                backgroundColor: [
                    'rgba(74, 222, 128, 0.8)',
                    'rgba(167, 139, 250, 0.8)'
                ],
                borderColor: [
                    '#4ade80',
                    '#a78bfa'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 13
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value}m (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Generate insights
function generateInsights(sessions) {
    const container = document.getElementById('insightsContainer');
    container.innerHTML = '';
    
    const hourlyData = analyzeHourlyDistribution(sessions);
    const weeklyData = analyzeWeeklyPattern(sessions);
    const dailyData = analyzeDailyStudyTime(sessions);
    
    // Best study hour
    const bestHour = hourlyData.indexOf(Math.max(...hourlyData));
    if (bestHour >= 0 && hourlyData[bestHour] > 0) {
        addInsight('success', '⏰', `Your peak productivity is at ${bestHour}:00. Try scheduling important tasks during this time!`);
    }
    
    // Best day
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const bestDay = weeklyData.indexOf(Math.max(...weeklyData));
    if (weeklyData[bestDay] > 0) {
        addInsight('success', '📅', `${weekDays[bestDay]} is your most productive day with ${weeklyData[bestDay]} minutes of study time!`);
    }
    
    // Consistency check
    const daysWithSessions = Object.keys(dailyData).length;
    if (daysWithSessions >= currentPeriod * 0.7) {
        addInsight('success', '🔥', `Great consistency! You studied on ${daysWithSessions} out of ${currentPeriod} days.`);
    } else if (daysWithSessions < currentPeriod * 0.3) {
        addInsight('warning', '💪', `Try to be more consistent! You only studied on ${daysWithSessions} days. Build a daily habit!`);
    }
    
    // Total sessions
    if (sessions.length > 0) {
        const avgDuration = sessions.reduce((sum, s) => sum + s.duration, 0) / sessions.length;
        addInsight('info', '📊', `Average session duration: ${avgDuration.toFixed(0)} minutes across ${sessions.length} sessions.`);
    }
    
    // Streak info
    const streak = getStorageData('studyStreak', 0);
    if (streak >= 7) {
        addInsight('success', '🎉', `Amazing ${streak}-day streak! Keep it up!`);
    } else if (streak > 0) {
        addInsight('info', '🌱', `Current streak: ${streak} days. Aim for 7 days to build a strong habit!`);
    }
}

function addInsight(type, icon, text) {
    const container = document.getElementById('insightsContainer');
    const insight = document.createElement('div');
    insight.className = `insight-item ${type}`;
    insight.innerHTML = `
        <div class="insight-icon">${icon}</div>
        <div>${text}</div>
    `;
    container.appendChild(insight);
}

// Update quick stats
function updateQuickStats(sessions) {
    const totalTime = sessions.reduce((sum, s) => sum + s.duration, 0);
    const hours = Math.floor(totalTime / 60);
    const minutes = totalTime % 60;
    
    document.getElementById('totalTimeAnalytics').textContent = 
        hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
    
    // Sessions completed
    document.getElementById('sessionsCompleted').textContent = sessions.length;
    
    // Study streak
    const streak = getStorageData('studyStreak', 0);
    document.getElementById('studyStreak').textContent = `${streak} day${streak !== 1 ? 's' : ''}`;
    
    // Daily average
    const daysWithSessions = Object.keys(analyzeDailyStudyTime(sessions)).length;
    const dailyAvg = daysWithSessions > 0 ? Math.round(totalTime / daysWithSessions) : 0;
    document.getElementById('dailyAverage').textContent = `${dailyAvg}m`;
    
    // Best day
    const weeklyData = analyzeWeeklyPattern(sessions);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const bestDayIndex = weeklyData.indexOf(Math.max(...weeklyData));
    document.getElementById('bestDay').textContent = weekDays[bestDayIndex];
    
    // Current level
    const totalXP = getStorageData('totalXP', 0);
    const level = calculateLevel(totalXP);
    document.getElementById('currentLevel').textContent = level;
}

// Render recent activity list
function renderRecentActivity() {
    const container = document.getElementById('recentActivityList');
    const sessions = generateSessionData().slice(-3).reverse(); // Last 3 sessions
    
    if (sessions.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: rgba(255,255,255,0.5);">
                <i class="fas fa-inbox" style="font-size: 48px; margin-bottom: 15px; opacity: 0.3;"></i>
                <p>No sessions yet. Start studying to see your activity here!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = sessions.map(session => {
        const timestamp = new Date(session.timestamp);
        const timeStr = timestamp.toLocaleString('en-US', { 
            month: 'short', 
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
        });
        
        const isStudy = session.type === 'study' || !session.type;
        const iconColor = isStudy ? '#4ade80' : '#a78bfa';
        const icon = isStudy ? 'book-open' : 'mug-hot';
        const title = isStudy ? 'Study Session' : 'Break Time';
        
        return `
            <div style="display: flex; align-items: center; gap: 15px; padding: 15px; background: rgba(255,255,255,0.03); border-radius: 10px; border-left: 3px solid ${iconColor};">
                <div style="width: 40px; height: 40px; border-radius: 10px; background: ${iconColor}20; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <i class="fas fa-${icon}" style="color: ${iconColor}; font-size: 18px;"></i>
                </div>
                <div style="flex: 1; min-width: 0;">
                    <div style="font-weight: 600; margin-bottom: 4px;">${title}</div>
                    <div style="font-size: 13px; color: rgba(255,255,255,0.6);">
                        <i class="fas fa-clock"></i> ${session.duration}min  •  
                        <i class="fas fa-calendar"></i> ${timeStr}
                    </div>
                </div>
                ${isStudy ? `<div style="padding: 6px 12px; background: ${iconColor}20; border-radius: 8px; color: ${iconColor}; font-size: 13px; font-weight: 600;">
                    <i class="fas fa-star"></i> +${session.xp_earned || 10}
                </div>` : ''}
            </div>
        `;
    }).join('');
}

// Clear history - removed since we removed the button

// Load all analytics
function loadAnalytics(period) {
    currentPeriod = period;
    const allSessions = generateSessionData();
    const filteredSessions = filterSessionsByPeriod(allSessions, period);
    
    if (filteredSessions.length === 0) {
        document.getElementById('insightsContainer').innerHTML = `
            <div class="insight-item info">
                <div class="insight-icon">📚</div>
                <div>No study data yet! Start a study session to see your analytics here.</div>
            </div>
        `;
        renderRecentActivity();
        return;
    }
    
    updateQuickStats(filteredSessions);
    createDailyChart(filteredSessions);
    createHourlyChart(filteredSessions);
    createWeeklyChart(filteredSessions);
    createPieChart(filteredSessions);
    generateInsights(filteredSessions);
    renderRecentActivity();
}

// Period selector buttons
document.querySelectorAll('.period-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const period = btn.dataset.period === 'all' ? 'all' : parseInt(btn.dataset.period);
        loadAnalytics(period);
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadAnalytics(7);
});
