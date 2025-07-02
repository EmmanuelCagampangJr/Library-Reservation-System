import React, { useState, useEffect } from 'react';
import styles from '../AppStyles';

function EquipmentManagement() {
  const [isVisible, setIsVisible] = useState(false);
  const [equipment, setEquipment] = useState([
    {
      id: 1,
      name: 'Laptop #1',
      type: 'Computer',
      serialNumber: 'LAP-001',
      status: 'available',
      location: 'Computer Lab A',
      lastMaintenance: '2024-01-01'
    },
    {
      id: 2,
      name: 'Projector #1',
      type: 'Audio/Visual',
      serialNumber: 'PROJ-001',
      status: 'in-use',
      location: 'Conference Room 1',
      lastMaintenance: '2023-12-15'
    },
    {
      id: 3,
      name: 'Printer #1',
      type: 'Printing',
      serialNumber: 'PRINT-001',
      status: 'maintenance',
      location: 'Library Office',
      lastMaintenance: '2024-01-10'
    },
    {
      id: 4,
      name: 'Scanner #1',
      type: 'Scanning',
      serialNumber: 'SCAN-001',
      status: 'available',
      location: 'Document Center',
      lastMaintenance: '2023-11-20'
    }
  ]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'var(--success-600)';
      case 'in-use': return 'var(--accent-600)';
      case 'maintenance': return 'var(--primary-600)';
      case 'broken': return 'var(--gray-600)';
      default: return 'var(--gray-600)';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'available': return 'var(--success-50)';
      case 'in-use': return 'var(--accent-50)';
      case 'maintenance': return 'var(--primary-50)';
      case 'broken': return 'var(--gray-50)';
      default: return 'var(--gray-50)';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'available': return '✅';
      case 'in-use': return '📱';
      case 'maintenance': return '🔧';
      case 'broken': return '❌';
      default: return '❓';
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setEquipment(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, status: newStatus }
          : item
      )
    );
  };

  return (
    <main style={{
      ...styles.main,
      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%), url('/images/background.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh'
    }}>
      <div style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease-out'
      }}>
        {/* Header */}
        <div style={{
          ...styles.textCenter,
          marginBottom: 'var(--space-12)'
        }}>
          <h1 style={{
            ...styles.heading,
            fontSize: 'var(--font-size-4xl)',
            marginBottom: 'var(--space-4)'
          }}>
            Equipment Management
          </h1>
          <p style={{
            ...styles.subtitle,
            fontSize: 'var(--font-size-lg)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Track and manage library equipment inventory and status
          </p>
        </div>

        {/* Stats Cards */}
        <div style={{
          ...styles.grid,
          ...styles.gridCols4,
          marginBottom: 'var(--space-12)'
        }}>
          <div style={{
            ...styles.card,
            textAlign: 'center',
            padding: 'var(--space-6)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-3xl)',
              marginBottom: 'var(--space-2)'
            }}>
              🔧
            </div>
            <div style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 700,
              color: 'var(--primary-600)',
              marginBottom: 'var(--space-1)'
            }}>
              {equipment.length}
            </div>
            <div style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--gray-600)'
            }}>
              Total Equipment
            </div>
          </div>

          <div style={{
            ...styles.card,
            textAlign: 'center',
            padding: 'var(--space-6)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-3xl)',
              marginBottom: 'var(--space-2)'
            }}>
              ✅
            </div>
            <div style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 700,
              color: 'var(--success-600)',
              marginBottom: 'var(--space-1)'
            }}>
              {equipment.filter(e => e.status === 'available').length}
            </div>
            <div style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--gray-600)'
            }}>
              Available
            </div>
          </div>

          <div style={{
            ...styles.card,
            textAlign: 'center',
            padding: 'var(--space-6)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-3xl)',
              marginBottom: 'var(--space-2)'
            }}>
              📱
            </div>
            <div style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 700,
              color: 'var(--accent-600)',
              marginBottom: 'var(--space-1)'
            }}>
              {equipment.filter(e => e.status === 'in-use').length}
            </div>
            <div style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--gray-600)'
            }}>
              In Use
            </div>
          </div>

          <div style={{
            ...styles.card,
            textAlign: 'center',
            padding: 'var(--space-6)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-3xl)',
              marginBottom: 'var(--space-2)'
            }}>
              🔧
            </div>
            <div style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 700,
              color: 'var(--primary-600)',
              marginBottom: 'var(--space-1)'
            }}>
              {equipment.filter(e => e.status === 'maintenance').length}
            </div>
            <div style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--gray-600)'
            }}>
              Maintenance
            </div>
          </div>
        </div>

        {/* Equipment List */}
        <div>
          <div style={{
            ...styles.flex,
            ...styles.justifyBetween,
            ...styles.itemsCenter,
            marginBottom: 'var(--space-6)'
          }}>
            <h2 style={{
              ...styles.title,
              color: 'var(--primary-700)'
            }}>
              Equipment Inventory
            </h2>
            <div style={{
              ...styles.flex,
              ...styles.itemsCenter,
              ...styles.gap2,
              padding: 'var(--space-2) var(--space-4)',
              background: 'var(--primary-50)',
              borderRadius: 'var(--radius-lg)',
              color: 'var(--primary-700)',
              fontWeight: 600
            }}>
              <span>🔧</span>
              {equipment.length} Items
            </div>
          </div>

          <div style={{
            ...styles.grid,
            ...styles.gridCols2,
            gap: 'var(--space-4)'
          }}>
            {equipment.map((item, index) => (
              <div key={item.id} style={{
                ...styles.card,
                padding: 'var(--space-6)',
                transform: `translateY(${isVisible ? 0 : 20}px)`,
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s ease-out ${0.2 + index * 0.1}s`
              }}>
                <div style={{
                  ...styles.flex,
                  ...styles.justifyBetween,
                  ...styles.itemsCenter,
                  marginBottom: 'var(--space-4)'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 600,
                      color: 'var(--gray-900)',
                      marginBottom: 'var(--space-1)'
                    }}>
                      {item.name}
                    </h3>
                    <p style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--primary-600)',
                      fontWeight: 500,
                      fontFamily: 'monospace'
                    }}>
                      {item.serialNumber}
                    </p>
                  </div>
                  <div style={{
                    ...styles.flex,
                    ...styles.itemsCenter,
                    ...styles.gap2
                  }}>
                    <span style={{
                      fontSize: 'var(--font-size-lg)'
                    }}>
                      {getStatusIcon(item.status)}
                    </span>
                    <select
                      value={item.status}
                      onChange={(e) => handleStatusChange(item.id, e.target.value)}
                      style={{
                        padding: 'var(--space-1) var(--space-2)',
                        fontSize: 'var(--font-size-xs)',
                        border: '1px solid var(--gray-200)',
                        borderRadius: 'var(--radius)',
                        background: getStatusBg(item.status),
                        color: getStatusColor(item.status),
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      <option value="available">Available</option>
                      <option value="in-use">In Use</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="broken">Broken</option>
                    </select>
                  </div>
                </div>
                
                <div style={{
                  ...styles.grid,
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: 'var(--space-3)'
                }}>
                  <div>
                    <p style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--gray-600)',
                      marginBottom: 'var(--space-1)'
                    }}>
                      Type
                    </p>
                    <p style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--gray-800)',
                      fontWeight: 500
                    }}>
                      {item.type}
                    </p>
                  </div>
                  <div>
                    <p style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--gray-600)',
                      marginBottom: 'var(--space-1)'
                    }}>
                      Location
                    </p>
                    <p style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--gray-800)',
                      fontWeight: 500
                    }}>
                      {item.location}
                    </p>
                  </div>
                  <div>
                    <p style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--gray-600)',
                      marginBottom: 'var(--space-1)'
                    }}>
                      Last Maintenance
                    </p>
                    <p style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--gray-800)',
                      fontWeight: 500
                    }}>
                      {item.lastMaintenance}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {equipment.length === 0 && (
            <div style={{
              ...styles.card,
              ...styles.textCenter,
              padding: 'var(--space-12)',
              color: 'var(--gray-500)'
            }}>
              <div style={{
                fontSize: 'var(--font-size-4xl)',
                marginBottom: 'var(--space-4)'
              }}>
                🔧
              </div>
              <h3 style={{
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--space-2)'
              }}>
                No Equipment Found
              </h3>
              <p>No equipment has been added to the inventory yet.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default EquipmentManagement;