import { useState } from 'react';
import { Icon } from '../../../SailIcons';

const suggestions = [
  "Help me get setup",
  "Create a test payment",
  "Create a Payment link"
];

interface InputBoxProps {
  onClose?: () => void;
}

export default function InputBox({ onClose }: InputBoxProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      console.log('Submit:', inputValue);
      // Handle submission logic here
    }
  };

  return (
    <div style={{
      width: '600px',
      position: 'relative',
      zIndex: 10,
    }}>
      {/* Suggestion Pills and Close Button */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
      }}>
        <div style={{
          display: 'flex',
          gap: '12px',
        }}>
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                display: 'flex',
                padding: '8px 16px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '200px',
                background: 'var(--neutral-700, #474E5A)',
                backdropFilter: 'blur(10px)',
                border: 'none',
                color: 'var(--Neutral-50, var(--neutral-50, #EBEEF1))',
                fontVariantNumeric: 'lining-nums proportional-nums',
                fontFamily: '"SF Pro"',
                fontSize: '13px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '-0.15px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#3A3F49';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--neutral-700, #474E5A)';
              }}
            >
              {suggestion}
            </button>
          ))}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            style={{
              display: 'flex',
              width: '36px',
              height: '36px',
              padding: '8px 16px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '50%',
              background: 'var(--neutral-600, #596171)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#4A5160';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--neutral-600, #596171)';
            }}
          >
            <div style={{
              display: 'flex',
              width: '12px',
              height: '12px',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
            }}>
              <Icon name="cancel" size="xsmall" style={{ color: 'var(--neutral-50, #EBEEF1)' }} />
            </div>
          </button>
        )}
      </div>

      {/* Input Field */}
      <div style={{
        display: 'flex',
        height: '64px',
        padding: 'var(--Spacing-medium, 16px) 16px',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: '8px',
        border: '2px solid var(--neutral-700, #474E5A)',
        background: 'var(--neutral-800, #353A44)',
        boxShadow: '0 15px 35px 0 rgba(48, 49, 61, 0.08), 0 5px 15px 0 rgba(0, 0, 0, 0.12)',
      }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
          placeholder="Ask a question"
          style={{
            flex: 1,
            padding: '0',
            border: 'none',
            background: 'transparent',
            color: '#FFFFFF',
            fontFamily: '"SF Pro Text"',
            fontSize: '16px',
            fontWeight: 400,
            outline: 'none',
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            display: 'flex',
            width: '32px',
            height: '32px',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '50px',
            background: 'var(--neutral-700, #474E5A)',
            boxShadow: '0 2px 5px 0 rgba(48, 49, 61, 0.08), 0 1px 1px 0 rgba(0, 0, 0, 0.12)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#3A3F49';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--neutral-700, #474E5A)';
          }}
        >
          <Icon name="arrowUp" size="small" style={{ color: '#FFFFFF' }} />
        </button>
      </div>
    </div>
  );
}
