import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'
import LoadingSpinner from '../components/LoadingSpinner';
import auth from './firebase.init';

function RequireAuth({ children }) {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

    loading && <LoadingSpinner />;

    if (user?.emailVerified) {
        return <Navigate to="/authentication/verify-email" state={{ from: location }} replace />;
    }
    else if (!user) {
        Swal.fire({
            icon: 'error',
            title: 'You are not logged in',
            text: `Please login to continue.`,
        });

        return <Navigate to="/authentication/login" state={{ from: location }} replace />;
    }
    else {
        // 
    }

    error && Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `${error?.message}`,
    });

    return children;
}

export default RequireAuth;