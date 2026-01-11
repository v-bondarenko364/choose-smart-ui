import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TermsPage = () => (
  <Box
    component="main"
    sx={{
      minHeight: '100vh',
      backgroundColor: '#F0F7FF',
      py: { xs: 4, sm: 6 },
      px: { xs: 1, sm: 3, lg: 4 },
    }}
  >
    <Container maxWidth="md">
      <Card
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: 'none',
          boxShadow: 3,
        }}
      >
        <CardContent
          sx={{
            p: 4,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: '1.875rem',
              fontWeight: 700,
              color: '#1A1F36',
              mb: 4,
            }}
          >
            Terms of Use
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              color: '#4A4A4A',
            }}
          >
            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                1. Introduction
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.75,
                }}
              >
                By accessing or using the ChooseSmart website (&quot;Service&quot;) at{' '}
                <Box component="span" sx={{ fontWeight: 600 }}>
                  https://choosesm.art/
                </Box>
                , you confirm that you have read, understood, and agree to be bound by these Terms
                of Use (&quot;Agreement&quot;). ChooseSmart is a free web-based service that
                provides users with insights to help them make informed decisions. To use the
                Service, you must register for an account.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                2. Service Description
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.75,
                }}
              >
                ChooseSmart is a free web application that helps users make informed decisions by
                providing insights and analysis. The Service is accessible through a web browser and
                requires user registration. Users can create text-based decisions and receive
                guidance to help them choose the best option.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                3. Registration and Account
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                To use the Service, you must:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    Register for a free account using Google OAuth authentication
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    Provide accurate and complete information during registration
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    Maintain the security of your account credentials
                  </Typography>
                </li>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                The Service is provided free of charge. No payment or subscription is required to
                access or use the Service.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                4. User Content and Responsibilities
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                You are solely responsible for any content you create through the Service, including
                text-based decisions. You agree that:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    You will not create, upload, or share any content that is illegal, harmful,
                    threatening, abusive, or violates any applicable laws
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    You will comply with all applicable laws and regulations
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    You will not use the Service for any unlawful purpose
                  </Typography>
                </li>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                ChooseSmart reserves the right to remove any content that violates these terms or is
                otherwise objectionable.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                5. Agreement Effective Date and Duration
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.75,
                }}
              >
                This Agreement takes effect on the date you first access or use the Service and
                remains in force until terminated by you or ChooseSmart. If you breach any term of
                this Agreement, your right to use the Service will automatically terminate without
                notice, and you must cease all use of the Service.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                6. Disclaimer of Warranties
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                You agree that your use of the Service is at your sole risk. To the maximum extent
                permitted by law:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    The Service is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without
                    warranties of any kind, either express or implied
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    ChooseSmart does not warrant that the Service will meet your requirements or
                    operate uninterrupted or error-free
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    The insights and recommendations provided by the Service are for informational
                    purposes only and should not be considered as professional advice
                  </Typography>
                </li>
              </Box>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                7. Limitation of Liability
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.75,
                  mb: 2,
                }}
              >
                To the maximum extent permitted by law:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    ChooseSmart shall not be liable for any indirect, incidental, special,
                    consequential, or punitive damages, or loss of profits, data, or other
                    intangibles, arising from your use of or inability to use the Service
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    ChooseSmart shall not be liable for any decisions made based on the insights or
                    recommendations provided by the Service
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
                    In no event shall ChooseSmart&apos;s total liability exceed the amount you paid
                    for the Service, which is zero as the Service is provided free of charge
                  </Typography>
                </li>
              </Box>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                8. Intellectual Property
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.75,
                }}
              >
                The Service, including its original content, features, and functionality, is owned
                by ChooseSmart and is protected by international copyright, trademark, and other
                intellectual property laws. You may not copy, modify, distribute, sell, or lease any
                part of the Service without our prior written consent.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                9. Third-Party Services
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.75,
                }}
              >
                The Service may use or include third-party services, including Google OAuth for
                authentication. You agree to comply with applicable third-party terms and
                acknowledge that ChooseSmart is not responsible for such services. Your use of
                third-party services is subject to their respective terms and privacy policies.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                10. Governing Law
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.75,
                }}
              >
                This Agreement is governed by the laws of Ukraine, excluding its conflict of laws
                rules. Any disputes arising from or relating to this Agreement or the Service shall
                be subject to the exclusive jurisdiction of the courts located in Ukraine.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                11. Severability
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.75,
                }}
              >
                If any provision of this Agreement is found to be invalid or unenforceable, the
                remaining provisions will remain in full force and effect. The invalid or
                unenforceable provision shall be replaced with a valid provision that comes closest
                to the intent of the original provision.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                12. Changes to Terms
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.75,
                }}
              >
                We reserve the right to modify or replace these Terms at any time. If a revision is
                material, we will provide at least 30 days notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole
                discretion. Your continued use of the Service after any changes constitutes your
                acceptance of the new Terms.
              </Typography>
            </Box>

            <Box component="section">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1A1F36',
                  mb: 2,
                }}
              >
                13. Contact Information
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.75,
                }}
              >
                If you have any questions about these Terms of Use, please contact us at:{' '}
                <Box
                  component="a"
                  href="mailto:v.bondarenko.job@gmail.com"
                  sx={{
                    color: '#4A90E2',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  v.bondarenko.job@gmail.com
                </Box>
              </Typography>
            </Box>

            <Box
              sx={{
                pt: 2,
                borderTop: '1px solid #D0E8FF',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: '0.875rem',
                  color: '#4A4A4A',
                }}
              >
                This policy is effective as of January 11, 2025.
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  </Box>
);

export default TermsPage;
