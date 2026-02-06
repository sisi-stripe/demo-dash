import { useState, useEffect, useCallback } from 'react';
import { Icon } from '../../../SailIcons';

interface DensityControlProps {
  targetSelector?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  storageKey?: string;
  unit?: string;
  // Container padding settings
  paddingMin?: number;
  paddingMax?: number;
  paddingStep?: number;
  paddingDefaultValue?: number;
  paddingStorageKey?: string;
  // Border radius settings
  radiusMin?: number;
  radiusMax?: number;
  radiusStep?: number;
  radiusDefaultValue?: number;
  radiusStorageKey?: string;
}

export default function DensityControl({
  targetSelector = ':root',
  min = 0,
  max = 48,
  step = 1,
  defaultValue = 20,
  storageKey = 'cardSpacing',
  unit = 'px',
  paddingMin = 0,
  paddingMax = 48,
  paddingStep = 1,
  paddingDefaultValue = 24,
  paddingStorageKey = 'containerPadding',
  radiusMin = 0,
  radiusMax = 24,
  radiusStep = 1,
  radiusDefaultValue = 4,
  radiusStorageKey = 'cardRadius'
}: DensityControlProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [spacing, setSpacing] = useState(defaultValue);
  const [padding, setPadding] = useState(paddingDefaultValue);
  const [radius, setRadius] = useState(radiusDefaultValue);

  // Load spacing from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored !== null) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed) && parsed >= min && parsed <= max) {
        setSpacing(parsed);
      }
    }
  }, [storageKey, min, max]);

  // Load padding from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(paddingStorageKey);
    if (stored !== null) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed) && parsed >= paddingMin && parsed <= paddingMax) {
        setPadding(parsed);
      }
    }
  }, [paddingStorageKey, paddingMin, paddingMax]);

  // Load radius from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(radiusStorageKey);
    if (stored !== null) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed) && parsed >= radiusMin && parsed <= radiusMax) {
        setRadius(parsed);
      }
    }
  }, [radiusStorageKey, radiusMin, radiusMax]);

  // Update CSS variable whenever spacing changes
  useEffect(() => {
    const value = `${spacing}${unit}`;

    if (targetSelector === ':root') {
      document.documentElement.style.setProperty('--card-spacing', value);
    } else {
      const elements = document.querySelectorAll(targetSelector);
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.setProperty('--card-spacing', value);
        }
      });
    }

    // Save to localStorage
    localStorage.setItem(storageKey, spacing.toString());
  }, [spacing, targetSelector, storageKey, unit]);

  // Update CSS variable whenever padding changes
  useEffect(() => {
    const value = `${padding}${unit}`;

    if (targetSelector === ':root') {
      document.documentElement.style.setProperty('--container-padding', value);
    } else {
      const elements = document.querySelectorAll(targetSelector);
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.setProperty('--container-padding', value);
        }
      });
    }

    // Save to localStorage
    localStorage.setItem(paddingStorageKey, padding.toString());
  }, [padding, targetSelector, paddingStorageKey, unit]);

  // Update CSS variable whenever radius changes
  useEffect(() => {
    const value = `${radius}${unit}`;

    if (targetSelector === ':root') {
      document.documentElement.style.setProperty('--radius-card', value);
    } else {
      const elements = document.querySelectorAll(targetSelector);
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.setProperty('--radius-card', value);
        }
      });
    }

    // Save to localStorage
    localStorage.setItem(radiusStorageKey, radius.toString());
  }, [radius, targetSelector, radiusStorageKey, unit]);

  // Keyboard shortcut to toggle (Ctrl/Cmd + D)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleIncrement = useCallback(() => {
    setSpacing(prev => Math.min(max, prev + step));
  }, [max, step]);

  const handleDecrement = useCallback(() => {
    setSpacing(prev => Math.max(min, prev - step));
  }, [min, step]);

  const handleReset = useCallback(() => {
    setSpacing(defaultValue);
  }, [defaultValue]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(parseInt(e.target.value, 10));
  };

  // Padding handlers
  const handlePaddingIncrement = useCallback(() => {
    setPadding(prev => Math.min(paddingMax, prev + paddingStep));
  }, [paddingMax, paddingStep]);

  const handlePaddingDecrement = useCallback(() => {
    setPadding(prev => Math.max(paddingMin, prev - paddingStep));
  }, [paddingMin, paddingStep]);

  const handlePaddingReset = useCallback(() => {
    setPadding(paddingDefaultValue);
  }, [paddingDefaultValue]);

  const handlePaddingSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPadding(parseInt(e.target.value, 10));
  };

  // Radius handlers
  const handleRadiusIncrement = useCallback(() => {
    setRadius(prev => Math.min(radiusMax, prev + radiusStep));
  }, [radiusMax, radiusStep]);

  const handleRadiusDecrement = useCallback(() => {
    setRadius(prev => Math.max(radiusMin, prev - radiusStep));
  }, [radiusMin, radiusStep]);

  const handleRadiusReset = useCallback(() => {
    setRadius(radiusDefaultValue);
  }, [radiusDefaultValue]);

  const handleRadiusSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadius(parseInt(e.target.value, 10));
  };

  const handleResetAll = useCallback(() => {
    setSpacing(defaultValue);
    setPadding(paddingDefaultValue);
    setRadius(radiusDefaultValue);
  }, [defaultValue, paddingDefaultValue, radiusDefaultValue]);

  return (
    <div
      className="density-control"
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close density control" : "Open density control"}
        aria-expanded={isOpen}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: isOpen ? '100%' : '44px',
          height: '44px',
          padding: '12px',
          background: 'white',
          border: '1px solid var(--border-default, #E3E8EF)',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '18px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {isOpen ? '✕' : '⚙️'}
      </button>

      {/* Control Panel */}
      <div
        style={{
          maxHeight: isOpen ? '600px' : '0',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          marginTop: isOpen ? '8px' : '0',
          padding: isOpen ? '16px' : '0',
          background: 'white',
          border: '1px solid var(--border-default, #E3E8EF)',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease-in-out',
          width: '240px',
        }}
        aria-hidden={!isOpen}
      >
        <div style={{ marginBottom: '12px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px'
          }}>
            <label
              htmlFor="density-slider"
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--text-default, #1A1F36)'
              }}
            >
              Card Spacing
            </label>
            <span style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text-subdued, #596171)',
              fontFamily: 'monospace'
            }}>
              {spacing}{unit}
            </span>
          </div>

          {/* Slider */}
          <input
            id="density-slider"
            type="range"
            min={min}
            max={max}
            step={step}
            value={spacing}
            onChange={handleSliderChange}
            aria-label={`Adjust spacing: ${spacing}${unit}`}
            style={{
              width: '100%',
              height: '4px',
              background: 'linear-gradient(to right, var(--brand-primary, #635BFF) 0%, var(--brand-primary, #635BFF) ' + ((spacing - min) / (max - min) * 100) + '%, var(--border-default, #E3E8EF) ' + ((spacing - min) / (max - min) * 100) + '%, var(--border-default, #E3E8EF) 100%)',
              borderRadius: '2px',
              outline: 'none',
              WebkitAppearance: 'none',
              appearance: 'none',
              cursor: 'pointer'
            }}
          />
        </div>

        {/* Control Buttons */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '12px'
        }}>
          <button
            onClick={handleDecrement}
            disabled={spacing <= min}
            aria-label="Decrease spacing"
            style={{
              flex: 1,
              height: '44px',
              padding: '8px',
              background: spacing <= min ? 'var(--background-offset, #F5F6F8)' : 'white',
              border: '1px solid var(--border-default, #E3E8EF)',
              borderRadius: '6px',
              fontSize: '18px',
              cursor: spacing <= min ? 'not-allowed' : 'pointer',
              opacity: spacing <= min ? 0.5 : 1,
              transition: 'all 0.2s',
            }}
          >
            −
          </button>
          <button
            onClick={handleIncrement}
            disabled={spacing >= max}
            aria-label="Increase spacing"
            style={{
              flex: 1,
              height: '44px',
              padding: '8px',
              background: spacing >= max ? 'var(--background-offset, #F5F6F8)' : 'white',
              border: '1px solid var(--border-default, #E3E8EF)',
              borderRadius: '6px',
              fontSize: '18px',
              cursor: spacing >= max ? 'not-allowed' : 'pointer',
              opacity: spacing >= max ? 0.5 : 1,
              transition: 'all 0.2s',
            }}
          >
            +
          </button>
        </div>

        {/* Padding Control Section */}
        <div style={{
          marginTop: '20px',
          paddingTop: '20px',
          borderTop: '1px solid var(--border-default, #E3E8EF)',
          marginBottom: '12px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px'
          }}>
            <label
              htmlFor="padding-slider"
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--text-default, #1A1F36)'
              }}
            >
              Container Padding
            </label>
            <span style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text-subdued, #596171)',
              fontFamily: 'monospace'
            }}>
              {padding}{unit}
            </span>
          </div>

          {/* Padding Slider */}
          <input
            id="padding-slider"
            type="range"
            min={paddingMin}
            max={paddingMax}
            step={paddingStep}
            value={padding}
            onChange={handlePaddingSliderChange}
            aria-label={`Adjust padding: ${padding}${unit}`}
            style={{
              width: '100%',
              height: '4px',
              background: 'linear-gradient(to right, var(--brand-primary, #635BFF) 0%, var(--brand-primary, #635BFF) ' + ((padding - paddingMin) / (paddingMax - paddingMin) * 100) + '%, var(--border-default, #E3E8EF) ' + ((padding - paddingMin) / (paddingMax - paddingMin) * 100) + '%, var(--border-default, #E3E8EF) 100%)',
              borderRadius: '2px',
              outline: 'none',
              WebkitAppearance: 'none',
              appearance: 'none',
              cursor: 'pointer'
            }}
          />

          {/* Padding Control Buttons */}
          <div style={{
            display: 'flex',
            gap: '8px',
            marginTop: '12px'
          }}>
            <button
              onClick={handlePaddingDecrement}
              disabled={padding <= paddingMin}
              aria-label="Decrease padding"
              style={{
                flex: 1,
                height: '44px',
                padding: '8px',
                background: padding <= paddingMin ? 'var(--background-offset, #F5F6F8)' : 'white',
                border: '1px solid var(--border-default, #E3E8EF)',
                borderRadius: '6px',
                fontSize: '18px',
                cursor: padding <= paddingMin ? 'not-allowed' : 'pointer',
                opacity: padding <= paddingMin ? 0.5 : 1,
                transition: 'all 0.2s',
              }}
            >
              −
            </button>
            <button
              onClick={handlePaddingIncrement}
              disabled={padding >= paddingMax}
              aria-label="Increase padding"
              style={{
                flex: 1,
                height: '44px',
                padding: '8px',
                background: padding >= paddingMax ? 'var(--background-offset, #F5F6F8)' : 'white',
                border: '1px solid var(--border-default, #E3E8EF)',
                borderRadius: '6px',
                fontSize: '18px',
                cursor: padding >= paddingMax ? 'not-allowed' : 'pointer',
                opacity: padding >= paddingMax ? 0.5 : 1,
                transition: 'all 0.2s',
              }}
            >
              +
            </button>
          </div>
        </div>

        {/* Border Radius Control Section */}
        <div style={{
          marginTop: '20px',
          paddingTop: '20px',
          borderTop: '1px solid var(--border-default, #E3E8EF)',
          marginBottom: '12px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px'
          }}>
            <label
              htmlFor="radius-slider"
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--text-default, #1A1F36)'
              }}
            >
              Card Border Radius
            </label>
            <span style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text-subdued, #596171)',
              fontFamily: 'monospace'
            }}>
              {radius}{unit}
            </span>
          </div>

          {/* Radius Slider */}
          <input
            id="radius-slider"
            type="range"
            min={radiusMin}
            max={radiusMax}
            step={radiusStep}
            value={radius}
            onChange={handleRadiusSliderChange}
            aria-label={`Adjust radius: ${radius}${unit}`}
            style={{
              width: '100%',
              height: '4px',
              background: 'linear-gradient(to right, var(--brand-primary, #635BFF) 0%, var(--brand-primary, #635BFF) ' + ((radius - radiusMin) / (radiusMax - radiusMin) * 100) + '%, var(--border-default, #E3E8EF) ' + ((radius - radiusMin) / (radiusMax - radiusMin) * 100) + '%, var(--border-default, #E3E8EF) 100%)',
              borderRadius: '2px',
              outline: 'none',
              WebkitAppearance: 'none',
              appearance: 'none',
              cursor: 'pointer'
            }}
          />

          {/* Radius Control Buttons */}
          <div style={{
            display: 'flex',
            gap: '8px',
            marginTop: '12px'
          }}>
            <button
              onClick={handleRadiusDecrement}
              disabled={radius <= radiusMin}
              aria-label="Decrease radius"
              style={{
                flex: 1,
                height: '44px',
                padding: '8px',
                background: radius <= radiusMin ? 'var(--background-offset, #F5F6F8)' : 'white',
                border: '1px solid var(--border-default, #E3E8EF)',
                borderRadius: '6px',
                fontSize: '18px',
                cursor: radius <= radiusMin ? 'not-allowed' : 'pointer',
                opacity: radius <= radiusMin ? 0.5 : 1,
                transition: 'all 0.2s',
              }}
            >
              −
            </button>
            <button
              onClick={handleRadiusIncrement}
              disabled={radius >= radiusMax}
              aria-label="Increase radius"
              style={{
                flex: 1,
                height: '44px',
                padding: '8px',
                background: radius >= radiusMax ? 'var(--background-offset, #F5F6F8)' : 'white',
                border: '1px solid var(--border-default, #E3E8EF)',
                borderRadius: '6px',
                fontSize: '18px',
                cursor: radius >= radiusMax ? 'not-allowed' : 'pointer',
                opacity: radius >= radiusMax ? 0.5 : 1,
                transition: 'all 0.2s',
              }}
            >
              +
            </button>
          </div>
        </div>

        {/* Reset Button */}
        <button
          onClick={handleResetAll}
          aria-label="Reset all to defaults"
          style={{
            width: '100%',
            height: '44px',
            padding: '8px 16px',
            background: 'white',
            border: '1px solid var(--border-default, #E3E8EF)',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--text-default, #1A1F36)',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          Reset All to Defaults
        </button>

        {/* Keyboard Hint */}
        <div style={{
          marginTop: '12px',
          paddingTop: '12px',
          borderTop: '1px solid var(--border-default, #E3E8EF)',
          fontSize: '12px',
          color: 'var(--text-subdued, #596171)',
          textAlign: 'center'
        }}>
          Press <kbd style={{
            padding: '2px 6px',
            background: 'var(--background-offset, #F5F6F8)',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '11px'
          }}>Ctrl+D</kbd> to toggle
        </div>
      </div>
    </div>
  );
}
